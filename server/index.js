const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const axios = require("axios");

const imageModel = require("./models/image-model");
const notificationModel = require("./models/notification-model");

const signup = require("./routes/signup");
const signin = require("./routes/signin");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const sendNotificationsHandler = (uploadedUserEmail, pplInImg, imageId) => {
  pplInImg.forEach(async (userEmail) => {
    if (userEmail.toLowerCase() != uploadedUserEmail.toLowerCase()) {
      const doc = await notificationModel.findOneAndUpdate(
        { email: userEmail },
        {
          $push: {
            notifications: `${uploadedUserEmail} uploaded an image having you with id ${imageId}`,
          },
        }
      );
    }
  });
};

app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGO_DB_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("connected", () => {
  console.log("Connected to Database");
});

connection.on("error", (err) => {
  console.log(`Error: ${err}`);
});

app.get("/", (req, res, next) => {
  res.send("<h2>Hey! Server Started</h2>");
});

app.use("/signup", signup);
app.use("/signin", signin);

app.post("/upload-image", upload.single("postfile"), async (req, res) => {
  const pplInImg = await axios.get(
    `http://127.0.0.1:5000/recognize-faces?file=${req.file.filename}`
  );
  console.log(pplInImg.data.peopleInImage);
  const saveImage = new imageModel({
    name: req.body.name,
    email: req.body.email,
    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/jpeg",
    },
    peopleInImage: pplInImg.data.peopleInImage,
  });

  try {
    sendNotificationsHandler(
      req.body.email,
      pplInImg.data.peopleInImage,
      saveImage.id
    );
  } catch (err) {
    console.log("Notification not sent! An Error Occurred");
  }

  saveImage
    .save()
    .then((res) => console.log("Image is Saved"))
    .catch((err) => console.log(err, "error"));
});

app.get("/upload-image", async (req, res) => {
  const allData = await imageModel.find();
  res.json(allData);
});

app.get("/notifications", async (req, res) => {
  const user = req.query.email;
  const nots = await notificationModel.findOne({email: user});
  res.json(nots.notifications)
})

app.put("/remove-notification", async (req, res) => {
  await notificationModel.findOneAndUpdate({email: req.body.email}, {
    $pop: {notifications: 1}
  }).then(re => res.status(200).send(re))
  .catch(err => console.error(err))
})

app.put("/remove-post", async (req, res) => {
  const removePost = await imageModel.findByIdAndDelete(req.body.id);
  const removeNot =  await notificationModel.findOneAndUpdate({email: req.body.email}, {
    $pop: {notifications: 1}
  }).then(re => res.status(200).send(re))
  .catch(err => console.error(err))
})

app.listen(8000, () => {
  console.log("Listening at 8000");
});
