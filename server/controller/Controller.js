const { hashPassword, verifyPassword } = require('../helper/bcyrpt')
const { Post, Category, User, Tag, sequelize } = require('../models')
const { signToken } = require('../helper/jwt')
const { Sequelize } = require('sequelize')
const slugify = require('../helper/slugify')

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

    static async indexPost(req, res, next) {
        try {
            const posts = await Post.findAll({
                include: [
                    { model: Category, as: "categories", attributes: { exclude: ['createdAt', 'updatedAt'] } },
                    { model: User, as: "author", attributes: { exclude: ['password'] } },
                    { model: Tag, as: "tags", attributes: { exclude: ['createdAt', 'updatedAt'] } },
                ]
            })
            // console.log(posts)
            res.status(200).json(posts)
        } catch (error) {
            // console.log(error)
            next(error)
        }
    }

    static async storePost(req, res, next) {
        const transaction = await sequelize.transaction();
        const { id: authorId } = req.user
        const { title, content, imgUrl, tags, categoryId } = req.body
        // console.log(user)
        try {
            const createSlug = slugify(title) + '-' + Math.floor(Math.random() * (999 - 100 + 1) + 100);

            if (!tags) throw { name: "tagRequired" }

            const storePost = await Post.create({ title, slug: createSlug, content, imgUrl, authorId, categoryId }, { transaction })

            const tagArr = tags.replaceAll(/\s/g, '').split('#')

            //masih hardcode

            const dataTags = []

            tagArr.forEach(tag => {
                if (tag !== "") {
                    dataTags.push({
                        postId: storePost.id,
                        name: tag
                    })
                }
            });

            if (dataTags.length < 3) throw { name: "tagMinimun" }

            // console.log(dataTags)
            await Tag.bulkCreate(dataTags, { transaction })

            res.status(200).json({ message: `Success add new post with id ${storePost.id}` })

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            next(error)
        }
    }

    static async updatePost(req, res, next) {
        const transaction = await sequelize.transaction();
        const { title, content, imgUrl, tags, categoryId } = req.body
        try {
            const { id } = req.params
            // console.log(id)
            const foundPost = await Post.findByPk(id)

            if (!foundPost) throw { name: "notFound" }

            if (!tags) throw { name: "tagRequired" }

            await Tag.destroy({
                where: {
                    postId: foundPost.id
                },
            }, { transaction });

            const tagArr = tags.replaceAll(/\s/g, '').split('#')

            await Post.update({ title, content, imgUrl, categoryId }, { where: { id: foundPost.id } }, { transaction })

            const dataTags = []

            tagArr.forEach(tag => {
                if (tag !== "") {
                    dataTags.push({
                        postId: id,
                        name: tag
                    })
                }
            });

            if (dataTags.length < 3) throw { name: "tagMinimun" }

            // console.log(dataTags)
            await Tag.bulkCreate(dataTags, { transaction })

            res.status(200).json({ message: `Success update post with id ${id}` })

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            next(error)
        }
    }

    static async destroyPost(req, res, next) {
        try {
            const { id } = req.params
            // console.log(id)
            const foundPost = await Post.findByPk(id)

            if (!foundPost) throw { name: "notFound" }

            await Post.destroy({
                where: { id }
            });

            res.status(200).json({ message: `Success delete post id ${id}` })
        } catch (error) {
            next(error)
        }
    }


    static async getTopTags(req, res, next) {
        try {
            const topTags = await Tag.findAll({
                attributes: ['name', [Sequelize.fn('COUNT', Sequelize.col('name')), 'count_name']],
                group: ['name'],
                order: [[Sequelize.literal('count_name'), 'DESC']],
                limit: 2,
            })

            // console.log(topTags)
            let result = []

            for (let i = 0; i < topTags.length; i++) {
                const tagName = topTags[i].name;
                // console.log(tagName)
                const posts = await Post.findAll({
                    attributes: ['id', 'title', 'slug', 'content'],
                    include: [{ model: Tag, where: { name: tagName }, as: "tags", attributes: [] }],
                    limit: 5
                })
                // console.log(posts)
                result.push({ tagName, posts })
            }

            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    static async indexPublicPost(req, res, next) {
        try {
            const posts = await Post.findAll({
                include: [
                    { model: Category, as: "categories", attributes: { exclude: ['createdAt', 'updatedAt'] } },
                    { model: User, as: "author", attributes: { exclude: ['password'] } },
                    { model: Tag, as: "tags", attributes: { exclude: ['createdAt', 'updatedAt'] } },
                ]
            })

            res.status(200).json(posts)
        } catch (error) {
            // console.log(error)
            next(error)
        }
    }

    static async showPublicPost(req, res, next) {
        try {
            const { slug } = req.params

            const post = await Post.findOne({
                where: { slug },
                include: [
                    { model: Category, as: "categories", attributes: ['id', 'name'] },
                    { model: User, as: "author", attributes: ['id', 'username', 'email'] },
                    { model: Tag, as: "tags", attributes: { exclude: ['createdAt', 'updatedAt'] } },
                ]
            })

            if (!post) throw { name: "notFound" }

            res.status(200).json(post)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller
