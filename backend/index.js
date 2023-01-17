const express = require("express")
const app = express()
const mongoose = require("mongoose")
const { json } = require("body-parser")
const User = require("./models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

app.use(require("cors")())
require("dotenv").config()

const port = process.env.port

mongoose
  .connect(process.env.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database ")
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`)
  })

app.use(json())

app.use("/", require("./routes/user"))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
