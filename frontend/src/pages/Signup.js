/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Loading from '../components/Loader'
import Message from '../components/Message'
import './Signup.css'
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
const Signup = () => {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('')
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [isMember, setIsMember] = useState(false);
  const [isBeneficiary, setIsBeneficiary] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  //TODO fix the error handling on selection of both checkbox
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (isMember && isBeneficiary) {
      setError('Please select only one of the checkbox')
      setLoading(false);
    }
    if (!isMember && !isBeneficiary) {
      setError('Please select at least one of the checkbox')
      setLoading(false);
    }
    if (isMember && !isBeneficiary) {
      axios
        .post('/user/register', { firstName, lastName, userName, emailAddress, password, isMember: true, isBeneficiary: false })
        .then((res) => {
          setLoading(false);
          setMessage(res.data.message);
          setTimeout(() => {
            navigate('/login')
          }, 2000)
        })
        .catch((err) => {
          setLoading(false);
          setError(err.response.data.message);
        });
    } else if (!isMember && isBeneficiary) {
      axios
        .post('/user/register', { firstName, lastName, userName, emailAddress, password, isMember: false, isBeneficiary: true })
        .then((res) => {
          setLoading(false);
          setMessage(res.data.message);
          setTimeout(() => {
            navigate('/login')
          }, 2000)
        })
        .catch((err) => {
          setLoading(false);
          setError(err.response.data.message);
        });
    }
  };

  return (
    <main className="form-signin" onSubmit={handleSubmit}>
      <form>
        <h1 className="h3 mb-3 fw-normal" id="signup-title">Signup</h1>
        {message && <Message variant='success'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loading />}
        <div className="form-floating">
          <input type="first-name" className="form-control" id="floatingInput" placeholder="FirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <label htmlFor="floatingInput">First Name</label>
        </div>
        <div className="form-floating">
          <input type="last-name" className="form-control" id="floatingInput" placeholder="LastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <label htmlFor="floatingInput">Last Name</label>
        </div>
        <div className="form-floating">
          <input type="user-name" className="form-control" id="floatingInput" placeholder="name@example.com" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <label htmlFor="floatingInput">User Name</label>
        </div>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingPassword" placeholder="Password" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
          <label htmlFor="floatingPassword">Email Address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword-signup" placeholder="ConfirmPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="floatingPassword">Password</label>
          <div>
            <p>Type of user:</p>
          </div>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" id="member-check" checked={isMember} onChange={(e) => setIsMember(e.target.checked)} /> Member
          </label>
          <label>
            <input type="checkbox" id="beneficiary-check" checked={isBeneficiary} onChange={(e) => setIsBeneficiary(e.target.checked)} /> Beneficiary
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" id="submit-button-signup" type="submit">Register</button>
        <Link className="signup-link" to="/Login">Already have an account? Login</Link>
      </form>
    </main>
  )
}

export default Signup