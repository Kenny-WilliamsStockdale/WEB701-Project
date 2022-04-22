/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Message from '../components/Message';
import Loading from '../components/Loader';
import axios from 'axios';
import './Login.css'
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */

const Login = () => {
  const navigate = useNavigate()
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get('/user/login/', {
        params: {
          emailAddress: emailAddress,
          password: password,
        },
      })
      .then((res) => {
        setLoading(false);
        setMessage(res.data.message);
        setTimeout(() => {
          navigate('/product')
        }, 2000)
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.message);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="form-signin">
      {message && <Message variant="success">{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loading />}
      <h1 className="h3 mb-3 fw-normal" id="login-title">Login</h1>
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="email address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
        <label htmlFor="floatingInput">Email Address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword-login" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" id="submit-button-login" type="submit">Login</button>
      <Link className="signup-link" to="/Signup">Don't have an account? Signup</Link>
    </form>
  )
}

export default Login