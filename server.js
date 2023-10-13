const express = require("express")
const path = require("path")
require("dotenv").config()

const app = express()
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./public/pages"))
app.use("/css", express.static(path.resolve(__dirname, "./public/assets/css")))
app.use("/fonts", express.static(path.resolve(__dirname, "./public/assets/fonts")))
app.use("/img", express.static(path.resolve(__dirname, "./public/assets/img")))
app.use("/js", express.static(path.resolve(__dirname, "./public/assets/js")))
app.use("/scss", express.static(path.resolve(__dirname, "./public/assets/scss")))

app.get()

app.listen(process.env.SERVER_PORT, () => {
    console.log(`http://localhost:${process.env.SERVER_PORT}`)
})