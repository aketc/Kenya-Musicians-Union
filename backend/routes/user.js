const router = require("express").Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

router.post("/user", async (req, res) => {
  try {
    const bpass = (await bcrypt.hash(req.body.password, 10)).toString()
    const user = new User({
      email: req.body.email,
      password: bpass,
      email: req.body.email,
    })
    await user.save()

    res.json({ status: "ok" })
  } catch (error) {
    res.status(500).json(error.message)
  }
})
router.post("/login", async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email: email })
    if (!user) throw new Error("user no found")
    const pwd = await bcrypt.compare(password, user.password)
    if (!pwd) throw new Error("wrong password")
    const token = jwt.sign(
      {
        email,
        pwd,
      },
      process.env.sec,
      { expiresIn: "1h" }
    )
    res.json({ status: "ok", user: token })
  } catch (err) {
    res.json({ user: false })
  }
})

module.exports = router
