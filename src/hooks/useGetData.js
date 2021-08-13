import { useEffect, useState } from "react";
import helpHttp from "../helpers/helpHttp";

export default function useGetData(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [dataError, setDataError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.status) {
          setData(res);
          setError(false);
          setIsPending(false);
        } else {
          setError(true);
          setIsPending(false);
          setDataError(res);
        }
      })
      .catch((err) => {
        setError(true);
        setIsPending(false);
        console.log(err);
      });

    return () => {
      setIsPending(true);
      setError(null);
      setData(null);
      setDataError(null);
    };
  }, [url]);

  return { data, error, isPending, dataError };
}
