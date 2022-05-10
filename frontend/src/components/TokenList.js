/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import OrderDetailsModal from './OrderDetailsModal';
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
const TokenList = () => {
  const [tokens, setTokens] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  // get user email address from database to update user and send to localStorage
  axios
    .post('/user/', { emailAddress: userInfo.data.emailAddress })
    .then(res => {
      localStorage.setItem('userInfo', JSON.stringify(res.data));
    }
    )
    .catch(err => {
      console.log(err);
    }
    )
 // set token from user information
  useEffect(() => {
    setTokens(userInfo.data.tokens);
  }, [])

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Tokens</th>
                  <th scope="col">Order Details</th>
                </tr>
              </thead>
              <tbody>
                {tokens ? (
                  tokens.map(token => {
                    return (
                      <tr key={token._id}>
                        <td>{token}</td>
                        <td>
                          <OrderDetailsModal token={token} />
                        </td>
                      </tr>
                    )
                  }
                  )
                ) : (
                  <tr>
                    <td>No Tokens</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TokenList;