const express = require("express");
const jwt = require("jsonwebtoken");

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

  return authRouter;
}

module.exports = createAuthRouter;
