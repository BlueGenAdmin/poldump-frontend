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

/**
 * |======== ROUTES ========|
 * /
 * /budget_reports
 * /ship_reports
 * /access_reports
 * /case_reports
 * /end_user_reports
 * /manage_settings
 * /config_settings
 * /user_account_settings
 */
app.get('/budget_reports', (req, res) => {
    return res.status(200).render('budget_reports')
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`http://localhost:${process.env.SERVER_PORT}/budget_reports`)
})