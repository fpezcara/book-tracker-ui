import { useEffect, useState } from "react";
import { WS_URL, API_URL } from "../constants";
const useSearchChannel = (searchInput, selectType) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!searchInput) return;

    if (!searchInput || !selectType) return;

    const fetchData = async () => {
      const response = await fetch(`${API_URL}/search`, {
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
    const ws = new WebSocket(`${WS_URL}/cable`);
    fetchData()
      .then((res) => res)
      .then((res) => {
        if (res.ok) {
          ws.onopen = () => {
            console.log("Connected to WebSocket");
            ws.send(
              JSON.stringify({
                command: "subscribe",
                identifier: JSON.stringify({
                  // channel: `search_${searchInput}_${selectType}`,
                  channel: "SearchChannel",
                  query: searchInput,
                  search_by: selectType,
                }),
              }),
            );
          };

          ws.onmessage = (event) => {
            console.log("event....", event);
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
