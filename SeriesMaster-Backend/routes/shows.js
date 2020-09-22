const express = require("express");
const { searchShows, searchSingleShow } = require("../api/getShows");
const { postShow, findShow } = require("../lib/showsDB");

function createShowsRouter(database) {
  const router = express.Router();

  router.get("/?q=:query", async (req, res) => {
    try {
      const query = req.params.query;
      const shows = await searchShows(query);

      res.json(shows);
    } catch (error) {
      response.status(500).send(error.message);
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      let show;
      show = await findShow(database, id);

      if (!show) {
        show = await searchSingleShow(id);
        postShow(database, show);
      }

      res.json(show);
    } catch (error) {
      response.status(500).send(error.message);
    }
  });

  return router;
}

module.exports = createShowsRouter;
