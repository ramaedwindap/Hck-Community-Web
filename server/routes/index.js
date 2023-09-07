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

router.post('/add-user', authentication, Controller.addUser)

router.get('/posts', authentication, Controller.getPost)

router.post('/posts', authentication, Controller.storePost)

router.put('/posts/:id', authentication, Controller.updatePost)

router.get('/public/posts/:slug', Controller.showPublicPost)
// router.delete('/posts/:id', authentication, Controller.destroyPost)

router.use(errorHandler)

module.exports = router