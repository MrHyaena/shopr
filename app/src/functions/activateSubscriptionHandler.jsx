export async function activateSubscriptionHandler(
  subId,
  subName,
  subWebsite,
  subFrequency,
  stripeCustomerId,
  user,
  itemsType
) {
  const apiURL = import.meta.env.VITE_API_URL;

  const session = await fetch(
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

  if (session.ok) {
    const json = await session.json();

    window.location.href = json;
  }
}
