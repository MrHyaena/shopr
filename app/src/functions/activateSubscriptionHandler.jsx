import { tokenExpired } from "./tokenExpired";

export async function activateSubscriptionHandler(
  setUser,
  setExpired,
  subId,
  subName,
  subWebsite,
  subFrequency,
  stripeCustomerId,
  user,
  itemsType
) {
  const apiURL = import.meta.env.VITE_API_URL;

  const response = await fetch(
    apiURL +
      "/api/stripe/activate/" +
      user.id +
      "/" +
      subId +
      "/" +
      subName +
      "/" +
      subWebsite +
      "/" +
      subFrequency +
      "/" +
      stripeCustomerId +
      "/" +
      itemsType,
    {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    }
  );

  const json = await response.json();

  if (response.ok) {
    window.location.href = json;
  }

  if (!response.ok) {
    tokenExpired(json, setUser, setExpired);
  }
}
