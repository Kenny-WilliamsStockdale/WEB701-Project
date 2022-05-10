/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
// show members listed products
const MemberProduct = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [memberId, setMemberId] = useState(userInfo.data._id);

  const getProducts = () => {
    axios
      .post('/product/products/memberId', { memberId })
      .then(res => {
        setProducts(res.data.data);
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
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center">Products listed</h1>
          <hr />
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Voucher Price</th>
              </tr>
            </thead>
            <tbody>
              {products ? (
                products.map(product => {
                  return (
                    <tr key={product._id}>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.voucherPrice}</td>
                    </tr>
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
  )
}
export default MemberProduct;
