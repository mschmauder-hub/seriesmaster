import tokenStorage from "../auth/tokenStorage";
import api from "./api";

export async function getMyShows(list) {
  const token = await tokenStorage.getToken();
  const { userId } = await tokenStorage.getUser();

  const response = await fetch(`${api.server}/api/users/${userId}/${list}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      "auth-token": token,
    }),
  });

  if (!response.ok) {
    return;
  }
  const data = await response.json();

  return data;
}

export async function postMyList(list, id) {
  const token = await tokenStorage.getToken();
  const { userId } = await tokenStorage.getUser();

  const response = await fetch(
    `${api.server}/api/users/${userId}/${list}/${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    }
  );
  const data = response.json();
  return data;
}
