export async function getShows() {
  let response;

  response = await fetch("http://localhost:3000/shows");

  const data = await response.json();

  return data;
}
export async function getShow(id) {
  let response;

  // response = await fetch(`http://192.168.178.44:3000/shows/${id}`);

  // only for expo web testing
  response = await fetch(`http://localhost:3000/shows/${id}`);

  const data = await response.json();

  return data;
}
