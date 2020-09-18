export async function getShows(query) {
  const response = await fetch(
    `https://seriesmaster2020.herokuapp.com/api/shows/q=${query}`
  );

  const data = response.text();

  return data;
}
export async function getShow(id) {
  const response = await fetch(
    `https://seriesmaster2020.herokuapp.com/api/shows/${id}`
  );

  const data = await response.json();

  return data;
}
