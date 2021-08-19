import { useEffect, useState } from "react";
import helpHttp from "../helpers/helpHttp";

function useAuth(options) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);
  const [errorBody, setErrorBody] = useState(null);

  useEffect(() => {
    if (options) {
      setIsPending(false);
      helpHttp()
        .post("/auth.php", options)
        .then((res) => {
          setData(res);
          sessionStorage.setItem("auth", JSON.stringify(res));
        })
        .catch((err) => {
          setError(true);
          setErrorBody(err);
        });
    }

    return () => {
      setData(null);
      setError(false);
      setIsPending(true);
      setErrorBody(null);
    };
  }, [options]);

  return {
    data,
    error,
    errorBody,
    isPending,
  };
}

export default useAuth;
