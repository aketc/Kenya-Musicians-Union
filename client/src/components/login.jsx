import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import "./style.css"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
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
      axios.post("http://localhost:4003/login", user, config).then((res) => {
        if (res.data.user) {
          localStorage.setItem("token", res.data.user)
          navigate("/")
        } else {
          alert("please check your credentials")
          navigate("/login")
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
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
        <div className="button-container">
          <input type="submit" />
        </div>
        <div>
          <p>
            If you dont have an account <a href="/register">Register here!</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
