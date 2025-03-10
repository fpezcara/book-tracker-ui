import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, searchBy, query) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      // console.log(
      //   "REST",
      //   await axios.post("http://localhost:3001/books/search", {
      //     query: "Evelyn",
      //     search_by: "title",
      //   },
      //     { withCredentials: true }),
      // );
      try {
        const res = await axios.post(
          url,
          JSON.stringify({
            book: {
              query: query,
              search_by: searchBy,
            },
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          },
        );
        const { data } = res;
        setData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setData([]);
      }
    };
    fetchApi();
  }, [url, query, searchBy]);

  return data;
};

export default useFetch;
