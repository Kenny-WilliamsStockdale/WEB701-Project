/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Loading from './Loader';
import Message from './Message';
import { Button, Modal, Nav } from 'react-bootstrap';

import axios from 'axios';
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
const TokenList = () => {
  const navigate = useNavigate();
  const[emailAddress, setEmailAddress] = useState('');
  const [tokens, setTokens] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

// get user info from database and store in local storage
    // axios
    //   .get('/user/'
    //   )

    //   .then(res => {
    //     localStorage.setItem('userInfo', JSON.stringify(res.data));
    //   }
    //   )
    //   .catch(err => {
    //     console.log(err);
    //   }
    //   )

  return (
    <div>
      <Nav.Link onClick={() => navigate('/token')}>
        <h1>Tokens</h1>
      </Nav.Link>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Token</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
  };

export default TokenList;

// axios
// .get('/user/', { params: { emailAddress: emailAddress } })

// .then(res => {
//   localStorage.setItem('userInfo', JSON.stringify(res.data))
// }
// )
// .catch(err => {
//   console.log(err);
// }
// )