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
  const [productId, setProductId] = useState([]);
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
    setProductId(userInfo.data.productId);
  }, [])

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card" id="card">
              <div className="card-header">
                <h4>Products Claimed</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Order Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productId ? (
                        productId.map(productId => {
                          return (
                            <tr key={productId._id}>
                              <td>{productId}</td>
                              <td>
                                <OrderDetailsModal token={productId} />
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
        </div>
      </div>
    </div>
  )
}
export default TokenList;