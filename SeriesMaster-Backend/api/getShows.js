const fetch = require("node-fetch");

async function searchShows(query) {
  try {
    const response = await fetch(
      `http://api.tvmaze.com/search/shows?q=${query}`
    );

    if (!response.ok) {
      throw new Error(response);
    }
    const data = await response.json();

    const filteredShows = data.filter((data) => {
      if (!data.show.image) {
        return false;
      }
      return true;
    });

    const tvShows = filteredShows.map((tvShow) => ({
      id: tvShow.show.id,
      title: tvShow.show.name,
      imgSrc: tvShow.show.image.medium,
    }));

    return tvShows;
  } catch (error) {
    console.log(error);
  }
}
async function getSingleShow(query) {
  try {
    const response = await fetch(`http://api.tvmaze.com/shows/${query}`);

    if (!response.ok) {
      throw new Error(response);
    }

    const data = await response.json();

    const tvShow = {
      genre: data.genres,
      id: data.id.toString(),
      title: data.name,
      imgSrc: data.image.medium,
      summary: data.summary.replace(/(<([^>]+)>)/gi, ""),
      lastEpisode: data._links.previousepisode.href,
    };

    return tvShow;
  } catch (error) {
    console.log(error);
  }
}
module.exports = { searchShows, getSingleShow };
