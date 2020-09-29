const CronJob = require("cron").CronJob;
const { checkApi, checkUpdates } = require("./checkUpdates");

function runUpdateShows(database) {
  const job = new CronJob("*/10 * * * *", async () => {
    const shows = await checkApi(database);

    const allShows = await Promise.all(
      shows.map((show) => checkUpdates(database, show))
    );

    const updatedShows = allShows.filter((myShow) => myShow);
    console.log(updatedShows);
  });

  job.start();
}

module.exports = { runUpdateShows };
