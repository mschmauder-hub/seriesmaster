async function updateWatchlist(id, showId, database, list) {
  const collection = database.collection("users");
  const show = await collection.find({ userId: id, [list]: showId }).toArray();
  if (show.length < 1) {
    await collection.updateOne({ userId: id }, { $push: { [list]: showId } });
    return;
  }
  await collection.updateOne({ userId: id }, { $pull: { [list]: showId } });
}

exports.updateWatchlist = updateWatchlist;
