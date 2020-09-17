const express = require("express");
const { searchShow } = require("../api/getShows");

function createShowsRouter() {
  const router = express.Router();

  router.get("/?q=:query", async (req, res) => {
    const query = req.params.query;
    const shows = await searchShow(query);

    res.send(shows);
  });

  return router;
}

module.exports = createShowsRouter;
