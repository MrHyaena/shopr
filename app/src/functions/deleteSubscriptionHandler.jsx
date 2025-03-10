import { useAuthContext } from "../hooks/useAuthContext";
import { useSubscriptionContext } from "../hooks/useSubscriptionContext";
const apiURL = import.meta.env.VITE_API_URL;

// FUNCTION FOR DELETING SUBSCRIPTIONS
export async function deleteSubscriptionHandler(
  subId,
  user,
  subscriptions,
  setSubscriptions,
  setLoader
) {
  setLoader(true);
  const response = await fetch(apiURL + "/api/subscriptions/" + subId, {
    method: "DELETE",
    mode: "cors",
    headers: {
      authorization: `Bearer ${user.token}`,
    },
  });

  const json = await response.json();

  if (response.ok) {
    setLoader(false);
    console.log("deleted");
    const subArray = subscriptions;
    const newSubscriptions = subArray.filter((element) => element._id != subId);
    setSubscriptions(newSubscriptions);
  }

  if (!response.ok) {
    setLoader(false);
    console.log(response);
  }
}
