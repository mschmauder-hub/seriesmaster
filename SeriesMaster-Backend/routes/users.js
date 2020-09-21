const express = require("express");
const { findShows } = require("../lib/showsDB");

function createUserRouter(database) {
  const router = express.Router();
  const collection = database.collection("users");

  router.get("/", async (req, res) => {
    const user = await collection.findOne({
      email: "user@mail.com",
    });

    res.send(user);
  });

  router.get("/:id/:list", async (req, res) => {
    try {
      const id = req.params.id;
      const list = req.params.list;
      const user = await collection.findOne({
        userId: id,
      });
      const shows = await findShows(database, user[list]);
      res.send(shows);
    } catch (error) {
      response.status(500).send(error.message);
    }
  });

  return router;
}

module.exports = createUserRouter;
