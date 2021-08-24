import { useEffect, useState } from "react";
import helpHttp from "../helpers/helpHttp";

function usePostData(options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [dataError, setDataError] = useState(null);

  useEffect(() => {
    if (Object.keys(options).length > 0) {
      setIsPending(true);
      helpHttp()
        .post(options.url, options.options)
        .then((res) => {
          setData(res);
          setIsPending(false);
          setError(false);
        })
        .catch((err) => {
          setDataError(err);
          setIsPending(false);
          setError(true);
        });
    }

    return () => {
      setData(null);
      setError(null);
      setIsPending(false);
      setDataError(null);
    };
  }, [options]);

  return {
    data,
    error,
    isPending,
    dataError,
  };
}

export default usePostData;
