const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/user-model');

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!bcrypt.compareSync(password, user.password)) {
        res.status(401).json({
          status: 401,
          message: "Invalid Password",
        });
      } else {
        const token = jwt.sign(password, process.env.SECRET_TOKEN)
        res.status(202).json({
          id: user._id,
          token,
          email,
          message: "User found",
        });
      }
    })
    .catch((error) => {
      console.log(error)
      res.status(404).json({
        status: 404,
        message: "Invalid Email",
      });
    });
});

module.exports = router;