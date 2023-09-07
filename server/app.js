if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const express = require('express')
const router = require('./routes')
const app = express()
const port = 3000
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string,role:string,phoneNumber:string,address:string

// npx sequelize-cli model:generate --name Category --attributes name:string

// npx sequelize-cli model:generate --name Post --attributes title:string,slug:string,content:text,imgUrl:string,categoryId:integer,authorId:integer

// npx sequelize-cli model:generate --name Tag --attributes postId:number,name:string
