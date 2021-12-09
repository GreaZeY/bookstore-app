const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const errorMiddleWare = require("./middleware/error.js")

const book = require("./routes/bookRoute.js")
const user = require("./routes/userRoute.js")
const path = require("path");


app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())


app.use("/api/v1", book)
app.use("/api/v1",user)

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.use(errorMiddleWare)
module.exports = app
