const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// login a user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "No user found!" });
    }

    // Check if the password is correct direct password comparison

    const passwordMatch = password === user.password;
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Send the token to the client
    res.json({
      id: user._id,
      message: "Login successful",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// create a user
router.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  const user = await User.create({ email, password, name });
  res.json(user);
});

module.exports = router;
