export function tokenExpired(json, setUser) {
  if (json.errorMessage == "TokenExpiredError") {
    setUser(null);
    localStorage.removeItem("user");
    console.log("tokenExpired");
  }
}
