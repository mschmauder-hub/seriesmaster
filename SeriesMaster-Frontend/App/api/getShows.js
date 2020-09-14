export async function getShows(id) {
  let response;

  if (id) {
    // response = await fetch(`http://192.168.178.44:3000/shows/${id}`);

    // only for expo web testing
    response = await fetch(`http://localhost:3000/shows/${id}`);
  } else {
    response = await fetch("http://localhost:3000/shows");
  }

  const data = await response.json();

  return data;
}
