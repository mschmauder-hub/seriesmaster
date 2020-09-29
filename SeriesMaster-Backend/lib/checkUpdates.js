const Bottleneck = require("bottleneck/es5");
const { getSingleShow } = require("../api/getShows");

async function checkUpdates(database, newShowData) {
  const showId = newShowData.id;

  const collection = database.collection("shows");

  const { lastEpisode } = await collection.findOne({ id: showId });

  if (newShowData.lastEpisode === lastEpisode) {
    return;
  }

  await collection.updateOne({ id: showId }, { $set: newShowData });

  return newShowData;
}

async function getAllDBShows(database) {
  const collection = database.collection("shows");
  const allIds = await collection
    .find({})
    .map((item) => {
      return item.id;
    })
    .toArray();

  return allIds;
}

async function checkApi(database) {
  const limiter = new Bottleneck({ maxConcurrent: 2, minTime: 300 });
  const showIds = await getAllDBShows(database);

  const allShows = () => {
    return Promise.all(
      showIds.map((id) => {
        return limiter.schedule(async () => {
          const show = await getSingleShow(id);
          return show;
        });
      })
    );
  };

  const shows = await allShows();

  return shows;
}

module.exports = { checkUpdates, checkApi };
