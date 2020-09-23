const express = require("express");
const { findShows } = require("../lib/showsDB");
const jwt = require("jsonwebtoken");
const { updateWatchlist } = require("../lib/usersDB");

function createUserRouter(database) {
  const router = express.Router();
  const collection = database.collection("users");

  router.use((req, res, next) => {
    const { authToken } = req.body;

    if (!authToken) {
      return res.status(401).send("No Access");
    }

    next();
  });

  router.get("/:id/:list", async (req, res) => {
    try {
      const id = req.params.id;
      const list = req.params.list;
      const user = await collection.findOne({
        userId: id,
      });
      const shows = await findShows(database, user[list]);
      res.json(shows);
    } catch (error) {
      response.status(500).send(error.message);
    }
  });

  router.post("/:id/:list/:showId", async (req, res) => {
    try {
      const id = req.params.id;
      const list = req.params.list;
      const showId = req.params.showId;

      updateWatchlist(id, showId, database, list);
      res.send("Updated");
    } catch (error) {
      response.status(500).send(error.message);
    }
  });

  return router;
}

module.exports = createUserRouter;
