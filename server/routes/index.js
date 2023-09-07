const express = require('express')
const Controller = require('../controller/controller')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
    res.send('Server is running..')
})

router.get('/posts', Controller.posts)

module.exports = router