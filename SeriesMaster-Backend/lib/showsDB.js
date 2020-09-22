async function postShow(database, show) {
  const collection = database.collection("shows");
  await collection.insertOne(show);
}

async function findShow(database, showId) {
  const collection = database.collection("shows");
  const show = await collection.findOne({ id: showId });

  return show;
}
async function findShows(database, showsId) {
  const collection = database.collection("shows");
  const shows = await collection.find({ id: { $in: showsId } }).toArray();

  return shows;
}
module.exports = { postShow, findShow, findShows };
