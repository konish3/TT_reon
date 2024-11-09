import { useState, useEffect } from "react";

// функция подлежит удалению, проверить не используется ли где-то и удалить.

const useFetch = (url, method = "GET") => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, { method: method })
      .then((res) => {
        if (!res.ok) {
          throw Error("Error fetching users data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url, method]);

  return { data, isPending, error };
};

export default useFetch;
