import { useState } from "react";
const apiURL = import.meta.env.VITE_API_URL;

export function useSignup() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [message, setMessage] = useState(null);

  async function signup(data) {
    setIsLoading(true);
    setError(null);

    const response = await fetch(apiURL + "/api/user/signup", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      setIsLoading(false);
      setMessage(
        "Registrace proběhla úspěšně. Odeslali jsme Vám email s odkazem pro aktivaci účtu. Jakmile na odkaz kliknete, bude Váš účet aktivován a Vy se můžete přihlásit."
      );
    }
  }

  return { signup, isLoading, error, message };
}
