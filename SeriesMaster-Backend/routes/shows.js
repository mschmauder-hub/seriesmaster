const express = require("express");
const { searchShows, searchSingleShow } = require("../api/getShows");

function createShowsRouter() {
  const router = express.Router();

  router.get("/?q=:query", async (req, res) => {
    const query = req.params.query;
    const shows = await searchShows(query);

    res.send(shows);
  });

  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const show = await searchSingleShow(id);

    res.send(show);
  });

  return router;
}

module.exports = createShowsRouter;
