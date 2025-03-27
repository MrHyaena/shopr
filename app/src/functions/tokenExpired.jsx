export function tokenExpired(json, setUser, setExpired) {
  if (json.errorMessage == "TokenExpiredError") {
    setUser(null);
    localStorage.removeItem("user");
    setExpired("Lhůta 90 dní již vypršela. Je nutné se znovu přihlásit.");
    console.log("tokenExpired");
  }
}
