const express = require('express')

const imageModel = require('../models/image-model')

const router = express.Router()

router.put('/', async (req, res) => {
    imageModel.remove({}, {justOne: true})
    .then(res => console.log(res))
    .catch(err => console.log(err))
})

module.exports = router;