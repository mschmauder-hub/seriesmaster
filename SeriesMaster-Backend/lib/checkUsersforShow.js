async function checkUsersForShow(database, show) {
  const collection = database.collection("users");
  const users = await collection
    .find({ $or: [{ watchlist: show.id }, { completed: show.id }] })
    .toArray();

  return users;
}

module.exports = { checkUsersForShow };
