import { useEffect, useState } from "react";
import helpHttp from "../helpers/helpHttp";

function useAuth(body) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [errorBody, setErrorBody] = useState(null);

  useEffect(() => {
    helpHttp()
      .post("/auth.php", {
        headers: { "content-type": "application/json" },
        body,
      })
      .then((res) => {
        setData(res);
        sessionStorage.setItem("auth", JSON.stringify(res[0]));
      })
      .catch((err) => {
        setError(true);
        setErrorBody(err);
      });

    return () => {
      setData(null);
      setError(false);
      setErrorBody(null);
    };
  }, [body]);

  return {
    data,
    error,
    errorBody,
  };
}

export default useAuth;
