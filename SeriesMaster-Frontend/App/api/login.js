import api from "./api";

export async function login(credentials) {
  const response = await fetch(`${api.server}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    return;
  }

  const data = await response.json();

  return data;
}
