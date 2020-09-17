const fetch = require("node-fetch");

async function searchShows(query) {
  try {
    const response = await fetch(
      `http://api.tvmaze.com/search/shows?q=${query}`
    );
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
async function searchSingleShow(query) {
  try {
    const response = await fetch(`http://api.tvmaze.com/shows/${query}`);
    const data = await response.json();

    const tvShow = {
      genre: data.genres,
      id: data.id,
      title: data.name,
      imgSrc: data.image.medium,
    };

    return tvShow;
  } catch (error) {
    console.log(error);
  }
}
exports.searchShows = searchShows;
exports.searchSingleShow = searchSingleShow;
