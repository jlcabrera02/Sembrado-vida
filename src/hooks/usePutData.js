import { useState } from "react";
import helpHttp from "../helpers/helpHttp";

export default function usePutData(url, options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  setIsPending(true);
  helpHttp()
    .put(url, options)
    .then((res) => {
      setData(res);
      setError(false);
      setIsPending(false);
    })
    .catch((err) => {
      setData(false);
      setError(err);
      setIsPending(false);
    });

  return () => {
    setData(null);
    setError(null);
    setIsPending(false);
  };

  return { data, error, isPending };
}
