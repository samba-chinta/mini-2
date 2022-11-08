const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs')
const axios = require('axios')

const imageModel = require('./models/image-model')
const userModel = require('./models/user-model')

const signup = require('./routes/signup')
const signin = require('./routes/signin')
// const uploadPage = require('./routes/upload-image');

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });

app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

mongoose.connect(process.env.MONGO_DB_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connection = mongoose.connection;

connection.once('connected', () => {
  console.log("Connected to Database")
})

connection.on('error', (err) => {
  console.log(`Error: ${err}`)
})

app.get('/', (req, res, next) => {
  res.send("<h2>Hey! Server Started</h2>")
})

app.use('/signup', signup)
app.use('/signin', signin)
// app.use('/upload-image', uploadPage)   

app.post('/upload-image', upload.single('postfile'), async (req, res) => {
  const pplInImg = await axios.get(`http://127.0.0.1:5000/recognize-faces?file=${req.file.filename}`)
  console.log(pplInImg.data.peopleInImage)
  const saveImage = new imageModel({
    name: req.body.name,
    email: req.body.email,
    img: {
      data: fs.readFileSync('uploads/' + req.file.filename),
      contentType: "image/jpeg"
    },
    peopleInImage: pplInImg.data.peopleInImage
  })
  saveImage.save()
  .then((res) => console.log("Image is Saved"))
  .catch((err) => console.log(err,'error'))
})

app.get('/upload-image', async (req, res) => {
  const allData = await imageModel.find();
  res.json(allData)
})

app.listen(8000, () => {
  console.log("Listening at 8000")
})