/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from '../components/Loader'
import Message from '../components/Message'
import TokenList from '../components/TokenList'
import './Account.css'
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
const Account = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('')
  const [emailAddress, setEmailAddress] = useState('');
  const [isMember, setIsMember] = useState(false);
  const [isBeneficiary, setIsBeneficiary] = useState(false);
  const [tokens, setTokens] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const deleteUser = () => {
    axios
      .delete('/user/deleteUser/', {
        data: {
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          emailAddress: emailAddress,
        }
      })
      .then(res => {
        localStorage.removeItem('userInfo');
        navigate('/')
        setMessage(res.data.message);
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
    setTokens(userInfo.data.tokens);
  }, [])

  return (
    <><div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card" id="cardAccount">
            <div className="card-header">
              <h3>Account</h3>
              {message && <Message variant='success'>{message}</Message>}
              {error && <Message variant='danger'>{error}</Message>}
            </div>
            <div className="card-body">
                <form>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input readOnly type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input readOnly type="text" className="form-control" id="lastName" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="userName">User Name</label>
                  <input readOnly type="text" className="form-control" id="userName" placeholder="Enter User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="emailAddress">Email Address</label>
                  <input readOnly type="email" className="form-control" id="emailAddress" placeholder="Enter Email Address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                </div>
                {userInfo.data.isMember ? (
                  <div className="form-group">
                    <label htmlFor="isMember">Member Account</label>
                    <input readOnly type="text" className="form-control" id="isMember" placeholder="Enter Member Account" value={userInfo.data.isMember = "Yes"} onChange={(e) => setIsMember(e.target.value)} />
                  </div>
                ) : (
                  <><><div className="form-group">
                    <label htmlFor="isBeneficiary">Beneficiary Account</label>
                    <input readOnly type="text" className="form-control" id="isBeneficiary" placeholder="Enter Beneficiary Account" value={userInfo.data.isBeneficiary = "Yes"} onChange={(e) => setIsBeneficiary(e.target.value)} />
                  </div>
                    <div className="form-group">
                      <label htmlFor="isBeneficiary">Tokens</label>
                      <input readOnly type="text" className="form-control" id="isBeneficiary" placeholder="Enter Beneficiary Account" value={userInfo.data.tokens} onChange={(e) => setTokens(e.target.value)} />
                    </div></>
                    {/* list of orders */}
                  </>
                )}
              </form>
              <button type="button" className="btn btn-primary" id="btn-edit" onClick={() => { navigate("/accountEdit") } }>Edit</button>
              <button type="button" className="btn btn-primary" id="btn-delete" onClick={() => { deleteUser() } }>Delete</button>
            </div>
          </div>
        </div>
      </div>
      {userInfo.data.isMember ? (
                null
              ) : (
                <TokenList/>
              )}
    </div></>
  )
}

export default Account