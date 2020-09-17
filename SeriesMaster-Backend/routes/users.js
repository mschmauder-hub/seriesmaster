const express = require("express");

function createUserRouter(database) {
  const router = express.Router();

  router.get("/", async (req, res) => {
    const collection = database.collection("users");
    const user = await collection.findOne({
      user: "data",
    });

    res.send(user);
  });

  return router;
}

module.exports = createUserRouter;
