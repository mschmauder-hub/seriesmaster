import tokenStorage from "../auth/tokenStorage";
import api from "./api";

export async function postExpoTokens(expoToken) {
  const token = await tokenStorage.getToken();
  const { userId } = await tokenStorage.getUser();

  await fetch(`${api.server}/api/users/pushtoken`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": token,
    },
    body: JSON.stringify({ token: expoToken, id: userId }),
  });
}
