const { Post, Category, User } = require('../models')

class Controller {
    static async posts(req, res, next) {
        try {
            const posts = await Post.findAll({ include: [{ model: Category }, { model: User }] })
            // console.log(posts)
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Controller