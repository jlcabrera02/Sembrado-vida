export default function helpHttp() {
  const customFetch = (endpoint, options) => {
    const defaultHeaders = {
      accept: "application/json",
    };

    const abort = new AbortController();
    options.signal = abort.signal;
    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...options.headers, ...defaultHeaders }
      : defaultHeaders;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    setTimeout(() => abort.abort(), 5000);
    console.log(options);

    return fetch(endpoint, options).then((res) =>
      res.ok
        ? res.json()
        : Promise.reject({
            err: true,
            status: res.status,
            statusText: res.status_msg || "No found",
          })
    );
  };

  //let host = "https://jlcabrera.000webhostapp.com";
  //let host = "http://localhost/backend";
  let host = "http://192.168.1.109";

  const get = (url, options = {}) => customFetch(`${host}${url}`, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(`${host}${url}`, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    customFetch(`${host}${url}`, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    customFetch(`${host}${url}`, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
}
