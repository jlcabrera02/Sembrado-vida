function helpAuth() {
  let auth = sessionStorage.getItem("auth")
    ? JSON.parse(sessionStorage.getItem("auth"))
    : false;

  return auth;
}

export default helpAuth;
