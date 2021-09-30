import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const arbotCont = new window.AbortController();

    setTimeout(() => {
      fetch(url, { signal: window.AbortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((e) => {
          if (e.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setError(e.message);
            setIsPending(false);
          }
        });
    }, 1000);

    return () => arbotCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
