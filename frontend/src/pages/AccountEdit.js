/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from '../components/Loader'
import Message from '../components/Message'
import './Account.css'
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
const AccountEdit = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('')
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [Loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      emailAddress: emailAddress,
      password: password,
    }
    axios
      .put('/user/editUser/', data)
      .then(res => {
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        setLoading(false);
        setMessage(res.data.message);
        setTimeout(() => {
          navigate('/account')
        }, 2000)
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    setFirstName(userInfo.data.firstName);
    setLastName(userInfo.data.lastName);
    setUserName(userInfo.data.userName);
    setEmailAddress(userInfo.data.emailAddress);
    setPassword(userInfo.data.password);
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h3>Edit Account</h3>
              {message && <Message variant='success'>{message}</Message>}
              {error && <Message variant='danger'>{error}</Message>}
              {Loading && <Loading />}
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="userName">User Name</label>
                  <input type="text" className="form-control" id="userName" placeholder="Enter User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="emailAddress">Email Address</label>
                  <input type="email" className="form-control" id="emailAddress" placeholder="Enter Email Address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="emailAddress">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </form>
              <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Submit</button>
              <button className="btn btn-primary" type="submit" onClick={() => {navigate("/account")}}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountEdit