const express = require("express");

function createShowsRouter() {
  const router = express.Router();

  router.get("/", async (req, res) => {
    res.send("Send Shows");
  });

  return router;
}

module.exports = createShowsRouter;
