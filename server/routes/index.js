const express = require('express')
const Controller = require('../controller/controller')
const errorHandler = require('../middleware/errorHandler')
const authentication = require('../middleware/authentication')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
    res.send('Server is running..')
})

router.post('/login', Controller.login)

router.get('/posts', authentication, Controller.posts)

router.post('/add-user', authentication, Controller.addUser)

router.use(errorHandler)

module.exports = router