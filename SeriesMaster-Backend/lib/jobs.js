const CronJob = require("cron").CronJob;
const { checkApi, checkUpdates } = require("./checkUpdates");
const { Expo } = require("expo-server-sdk");
const { checkUsersForShow } = require("./checkUsersforShow");

function runUpdateShows(database) {
  const job = new CronJob("*/30 * * * *", async () => {
    let expo = new Expo();
    const shows = await checkApi(database);

    const allShows = await Promise.all(
      shows.map((show) => checkUpdates(database, show))
    );

    const updatedShows = allShows.filter((myShow) => myShow);

    if (updatedShows.length < 1) {
      return;
    }

    const allMessages = await Promise.all(
      updatedShows.map(async (show) => {
        const users = await checkUsersForShow(database, show);

        return users.map((user) => ({
          to: user.token,
          sound: "default",
          body: `The following show has been updated: ${show.title}`,
        }));
      })
    );

    allMessages.forEach(async (messages) => {
      const ticket = await expo.sendPushNotificationsAsync(messages);
      console.log(ticket);
    });
  });

  job.start();
}

module.exports = { runUpdateShows };
