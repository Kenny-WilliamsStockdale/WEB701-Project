/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import UpdateClaimModal from './UpdateClaimModal';
import './MemberProduct.css';
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
// show members listed products
const MemberProduct = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [memberId, setMemberId] = useState(userInfo.data._id);
  const memberProducts = JSON.parse(localStorage.getItem('memberProducts'));

  const getProducts = () => {
    axios
      .post('/product/products/memberId', { memberId })
      .then(res => {
        setProducts(res.data.data);
        localStorage.setItem('memberProducts', JSON.stringify(res.data.data));

      }
      )
      .catch(err => {
        setError(err.response.data.message);
      }
      )
  }
  useEffect(() => {
    getProducts();
  }
    , [])
  return (
    // card list for products
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card" id="card">
            <div className="card-header">
              <h4>Products Listed</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                    <th scope="col">ProductID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Token Price</th>
                    </tr>
                  </thead>
                  <tbody>
                  {products ? (
                products.map(product => {
                  return (
                    <><tr key={product._id}>
                      <td>{product._id}</td>
                      <td>{product.name}</td>
                      <td>{product.voucherPrice}</td>
                      <td><UpdateClaimModal product={product}/></td>
                    </tr></>
                  )
                }
                )
              ) : (
                <tr>
                  <td>No Products</td>
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
  )
}
export default MemberProduct;
