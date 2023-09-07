const express = require('express')
const Controller = require('../controller/controller')
const errorHandler = require('../middleware/errorHandler')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
    res.send('Server is running..')
})

router.get('/posts', Controller.posts)

router.post('/login', Controller.login)

router.use(errorHandler)

module.exports = router