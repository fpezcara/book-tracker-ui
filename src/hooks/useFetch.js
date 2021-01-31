import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(url);
      const { data } = await res;
      setData(data);
    };
    fetchApi();
  }, [url]);
  console.log(data);

  return data;
};

export default useFetch;
