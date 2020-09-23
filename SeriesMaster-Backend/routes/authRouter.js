const express = require("express");
const jwt = require("jsonwebtoken");

function createAuthRouter(database) {
  const authRouter = express.Router();
  const collection = database.collection("users");

  authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const { userId, watchlist, completed } = await collection.findOne({
      email: email,
      password: password,
    });

    if (!userId) {
      res.status(400).send("Login failed");
      return;
    }
    const authToken = jwt.sign(
      { email, userId, watchlist, completed },
      process.env.JWT_SECRET
    );

    res.json(authToken);
  });

  return authRouter;
}

module.exports = createAuthRouter;
