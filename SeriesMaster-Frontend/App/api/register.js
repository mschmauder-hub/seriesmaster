export async function register(credentials) {
  const response = await fetch(
    `https://seriesmaster2020.herokuapp.com/api/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
  );

  if (!response.ok) {
    console.log("Register Failed");
    return;
  }
  return response;
}
