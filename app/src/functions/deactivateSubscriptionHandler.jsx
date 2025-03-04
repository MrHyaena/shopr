import { useAuthContext } from "../hooks/useAuthContext";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
const apiURL = import.meta.env.VITE_API_URL;

// FUNCTION FOR DELETING SUBSCRIPTIONS
export async function deactivateSubscriptionHandler(
  subId,
  stripeSubId,
  user,
  setSubscriptions
) {
  const response = await fetch(
    apiURL + "/api/subscriptions/deactivate/" + subId + "/" + stripeSubId,
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
    setSubscriptions(json.subscriptions);
  }

  if (!response.ok) {
    console.log(response);
  }
}
