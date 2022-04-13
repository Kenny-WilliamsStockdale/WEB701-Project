/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React from 'react'
import { Link } from 'react-router-dom';
import './Signup.css'
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
const Signup = () => {
  return (
    <form>
      <h1 className="h3 mb-3 fw-normal">Signup</h1>
      <div className="form-floating">
        <input type="first-name" className="form-control" id="floatingInput" placeholder="FirstName" />
        <label htmlFor="floatingInput">First Name</label>
      </div>
      <div className="form-floating">
        <input type="last-name" className="form-control" id="floatingInput" placeholder="LastName" />
        <label htmlFor="floatingInput">Last Name</label>
      </div>
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="form-floating">
        <input type="confirm-password" className="form-control" id="floatingPassword" placeholder="ConfirmPassword" />
        <label htmlFor="floatingPassword">Confirm Password</label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
      <Link className="signup-link"to="/Login">Already have an account?</Link>
    </form>
  )
}

export default Signup