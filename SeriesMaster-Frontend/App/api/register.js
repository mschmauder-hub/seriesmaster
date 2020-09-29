import api from "./api";

export async function register(credentials) {
  const response = await fetch(`${api.server}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    console.log("Register Failed");
    return;
  }
  return response;
}
