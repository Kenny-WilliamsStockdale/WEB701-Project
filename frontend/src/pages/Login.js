/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */

const Login = () => {
  return (
<main className="form-signin">
  <form>
    <h1 className="h3 mb-3 fw-normal" id="login-title">Please login</h1>
    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" defaultValue="remember-me" /> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" id="submit-button" type="submit">Sign in</button>
    <Link className="signup-link"to="/Signup">New Customer? Register</Link>
  </form>
</main>
  )
}

export default Login