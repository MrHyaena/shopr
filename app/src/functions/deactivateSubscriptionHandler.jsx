import { tokenExpired } from "./tokenExpired";

const apiURL = import.meta.env.VITE_API_URL;

// FUNCTION FOR DELETING SUBSCRIPTIONS
export async function deactivateSubscriptionHandler(
  subId,
  stripeSubId,
  user,
  setUser,
  setSubscriptions,
  setLoader
) {
  setLoader(true);
  const response = await fetch(
    apiURL +
      "/api/subscriptions/deactivate/" +
      subId +
      "/" +
      stripeSubId +
      "/" +
      user.id,
    {
      method: "GET",
      mode: "cors",
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    }
  );

  const json = await response.json();

  console.log(json);

  if (response.ok) {
    setLoader(false);

    setSubscriptions(json.subscriptions);
  }

  if (!response.ok) {
    setLoader(false);
    tokenExpired(json, setUser);
    console.log(response);
  }
}
