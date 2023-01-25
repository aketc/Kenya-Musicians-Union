import React, { useState } from "react"

import "./style.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repassword, setRepassword] = useState("")

  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleRepassword = (e) => {
    setRepassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      const user = { email, password }
      const config = {
        header: {
          "content-type": "application/json",
        },
      }
      if (password === repassword) {
        axios
          .post("http://192.168.111.67:4003/user", user, config)
          .then((res, err) => {
            if (!err) {
              navigate("/login")
            } else {
              alert("not added")
              navigate("/register")
            }
          })
      } else {
        alert("password and confirm password do not match")
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-container">
          <label>Email </label>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="password"
            required
            value={repassword}
            onChange={handleRepassword}
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div>
          <p>
            Already have an account <a href="/login">login here!</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register
