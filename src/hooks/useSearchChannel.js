import { useEffect, useState } from "react";
import { WS_URL, API_URL } from "../utils/constants";
const useSearchChannel = (searchInput, selectType) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!searchInput || !selectType) return;
    const ws = new WebSocket(`${WS_URL}/cable`);

    // todo: dont connect to websocket if we're already connected...
    ws.onopen = () => {
      console.log("Connected to WebSocket");
      ws.send(
        JSON.stringify({
          command: "subscribe",
          identifier: JSON.stringify({
            // channel: `search_${searchInput}_${selectType}`,
            channel: "SearchChannel",
          }),
        }),
      );
    };
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/books/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          book: {
            query: searchInput,
            search_by: selectType,
          },
        }),
        widthCredentials: true, // This ensures that cookies are included in the request
      });

      return response;
    };

    console.log("ws irl", WS_URL);
    fetchData()
      .then((res) => res)
      .then((res) => {
        if (res.ok) {
          ws.onmessage = (event) => {
            console.log("event....", event);
            console.log("DATA....", event.data);
            try {
              const data = JSON.parse(event.data);
              if (
                data?.message?.message?.data &&
                Array.isArray(data.message.message.data)
              ) {
                console.log("Log DATA: ", data);

                setSearchResults(data.message.message.data);
              }
            } catch (error) {
              console.error("Error parsing WebSocket message:", error);
            }
          };
        }
      });

    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, [searchInput, selectType]);

  return searchResults;
};

export default useSearchChannel;
