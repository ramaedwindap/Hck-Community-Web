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

            if (!foundUser) throw { name: "invalidInputLogin" }
            // console.log(foundUser, "found")

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

    static async addUser(req, res, next) {
        try {
            // const { access_token } = req.header
            const { email, username, password, phoneNumber, address } = req.body

            if (!password) throw { name: "passwordRequired" }

            const passwordHash = hashPassword(password)

            const user = await User.create({ email, username, password: passwordHash, phoneNumber, address })

            res.status(200).json({ message: `Success add user ${user.username} as admin!` })
        } catch (error) {
            next(error)
        }
    }

    static async posts(req, res, next) {
        try {
            const posts = await Post.findAll({ include: [{ model: Category, as: "categories" }, { model: User, as: "author", attributes: { exclude: ['password'] } }] })
            // console.log(posts)
            res.status(200).json(posts)
        } catch (error) {
            // console.log(error)
            next(error)
        }
    }
}

module.exports = Controller