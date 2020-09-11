export async function getShows(id) {
  let response;
  if (id) {
    response = await fetch(`http://localhost:3000/shows/${id}`);
  } else {
    response = await fetch("http://localhost:3000/shows");
  }

  if (!response.ok) {
    throw new Error();
  }
  const data = await response.json();
  console.log(data);

  return data;
}
