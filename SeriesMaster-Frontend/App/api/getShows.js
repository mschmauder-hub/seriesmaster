import api from "./api";

export async function getShows(query) {
  if (!query) {
    return;
  }
  const response = await fetch(`${api.server}/api/shows/q=${query}`);

  const data = await response.json();

  return data;
}
export async function getShow(id) {
  const response = await fetch(`${api.server}/api/shows/${id}`);

  const data = await response.json();

  return data;
}
