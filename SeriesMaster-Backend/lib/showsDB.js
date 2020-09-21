async function postShow(database, show) {
  const collection = database.collection("shows");
  await collection.insertOne(show);
}

async function findShow(database, showId) {
  const collection = database.collection("shows");
  const show = await collection.findOne({ id: showId });

  return show;
}

exports.postShow = postShow;
exports.findShow = findShow;
