const express = require("express");
const { findShows } = require("../lib/showsDB");
const jwt = require("jsonwebtoken");
const { updateWatchlist } = require("../lib/usersDB");

function createUserRouter(database) {
  const router = express.Router();
  const collection = database.collection("users");

  router.use(async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
      return res.status(401).send("No Access");
    }
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(401).end("Unauthorized");
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
      res.status(500).send(error.message);
    }
  });

  router.post("/:id/:list/:showId", async (req, res) => {
    try {
      const id = req.params.id;
      const list = req.params.list;
      const showId = req.params.showId;

      await updateWatchlist(id, showId, database, list);
      const user = await collection.findOne({ userId: id });

      res.json(user[list]);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  router.post("/pushtoken", async (req, res) => {
    try {
      const { id, token } = req.body;

      if (!token) {
        return res.send("no Expo token provided");
      }

      await collection.updateOne({ userId: id }, { $set: { token: token } });

      res.send("OK");
    } catch (error) {
      console.log(error);
    }
  });

  return router;
}

module.exports = createUserRouter;
