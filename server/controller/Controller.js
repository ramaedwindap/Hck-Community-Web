const { hashPassword, verifyPassword } = require('../helper/bcyrpt')
const { Post, Category, User } = require('../models')
const { signToken } = require('../helper/jwt')

class Controller {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            // console.log(email, password)
            if (!email) throw { name: "emailRequired" }
            if (!password) throw { name: "passwordRequired" }

            const foundUser = await User.findOne({ where: { email }, raw: true })
            // console.log(foundUser)
            if (!foundUser) throw { name: "invalidInputLogin" }

            const validPassword = verifyPassword(password, foundUser.password)

            if (!validPassword) throw { name: "invalidInputLogin" }

            delete foundUser.password

            // console.log(foundUser)
            const access_token = signToken(foundUser)

            res.status(200).json({ access_token })
        } catch (error) {
            // console.log(error)
            next(error)
        }
    }

    static async posts(req, res, next) {
        try {
            const posts = await Post.findAll({ include: [{ model: Category }, { model: User }] })
            // console.log(posts)
            res.status(200).json(posts)
        } catch (error) {
            // console.log(error)
            next(error)
        }
    }
}

module.exports = Controller