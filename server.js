const express = require("express")
const path = require("path")
require("dotenv").config()

const app = express()
app.use(express.urlencoded({
    extended: false
}))
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

app.get('/edit_budget_report', (req, res) => {
    return res.status(200).render('budget_reports_form')
})

app.get('/login', (req, res) => {
    return res.status(200).render('login')
})

app.post("/login", (req, res) => {
    console.log(req.body);
    if (req.body.email === "admin@gmail.com" && req.body.password === "admin") {
        return res.status(200).redirect('/budget_reports')
    } else {
        return res.status(200).redirect('/login')
    }
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`http://localhost:${process.env.SERVER_PORT}/budget_reports`)
})