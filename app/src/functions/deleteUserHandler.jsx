const apiURL = import.meta.env.VITE_API_URL;
const websiteURL = import.meta.env.VITE_WEBSITE_URL;

// FUNCTION FOR DELETING SUBSCRIPTIONS
export function deleteUserHandler() {
  async function deleteUser(user, setUser, setLoader, setErrorDelete) {
    setLoader(true);
    const response = await fetch(apiURL + "/api/user/delete/" + user.id, {
      method: "DELETE",
      mode: "cors",
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      setLoader(false);
      localStorage.clear();
      window.location.href = websiteURL;
    }

    if (!response.ok) {
      setLoader(false);
      setErrorDelete(json);
    }
  }

  return { deleteUser };
}
