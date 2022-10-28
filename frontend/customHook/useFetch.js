import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [refreshData, setRefreshDate] = useState(true);

  useEffect(() => {
    if (refreshData) {
      fetch(`http://10.10.9.4:5000/${url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setRefreshDate(false);
          setData(data);
        });
    }
  }, [url, refreshData]);

  const getRefreshedData = () => {
    setRefreshDate(true);
  };

  return [data, getRefreshedData];
};

export default useFetch;
