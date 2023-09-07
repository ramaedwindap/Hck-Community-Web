function errorHandler(err, req, res, next) {
    console.log(err, "<==================error")

    let name = err.name
    switch (name) {
        case "emailRequired":
            return res.status(400).json({ message: "Email is required!" })
        case "passwordRequired":
            return res.status(400).json({ message: "Password is required!" })
        case "invalidInputLogin":
            return res.status(401).json({ message: "Invalid email or password" })


        default:
            return res.status(500).json({ message: "Internal server error" })
    }
    next()
}

module.exports = errorHandler