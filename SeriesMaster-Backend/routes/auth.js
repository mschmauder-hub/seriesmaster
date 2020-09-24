const express = require("express");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

function createAuthRouter(database) {
  const authRouter = express.Router();
  const collection = database.collection("users");

  authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await collection.findOne({
      email: email,
      password: password,
    });
    if (!user) {
      return res.status(400).send("Login failed");
    }
    const { userId, watchlist, completed } = user;

    const authToken = jwt.sign(
      { email, userId, watchlist, completed },
      process.env.JWT_SECRET
    );

    res.json(authToken);
  });
  authRouter.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const user = await collection.findOne({
      email: email,
    });
    if (user) {
      return res.status(400).send("E-mail already exists.");
    }

    const userId = uuidv4();

    await collection.insertOne({
      email: email,
      password: password,
      userId: userId,
    });

    res.send("Register User");
  });

  return authRouter;
}

module.exports = createAuthRouter;
