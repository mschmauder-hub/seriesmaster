const fetch = require("node-fetch");

async function searchShow(title) {
  try {
    const response = await fetch(
      `http://api.tvmaze.com/search/shows?q=${title}`
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
exports.searchShow = searchShow;
