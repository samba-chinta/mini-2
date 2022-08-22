const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user-model");

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, email, password, phone, dob, gender } = req.body;
  await User.findOne({ email }).catch((err) => {
    res.json({
      status: 403,
      message: err.message,
    });
  });

  const newUser = {
    email,
    password: bcrypt.hashSync(password, 10),
    username,
    phone,
    dob: new Date(dob),
    gender,
  };

  await User.create(newUser)
    .then((user) => {
      res.status(201).json({
        status: 201,
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: 400,
        message: err.message,
      });
    });
});

module.exports = router;
