const express = require("express");

function createUserRouter(database) {
  const router = express.Router();

  router.get("/", async (req, res) => {
    console.log(database);
    const collection = database.collection("users");
    const user = await collection.findOne({
      user: "data",
    });

    console.log(user);
    res.send(user);
  });

  return router;
}

module.exports = createUserRouter;
