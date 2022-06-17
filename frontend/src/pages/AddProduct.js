/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Loading from '../components/Loader'
import Message from '../components/Message'
import MemberProduct from '../components/MemberProduct'
import './AddProduct.css'
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
const AddProduct = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [voucherPrice, setVoucherPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [memberId, setMemberId] = useState('');
  const [claimedStatus, setClaimedStatus] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const handleAddProductSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (name === '' || description === '' || voucherPrice === '' || imageUrl === '' || category === '') {
      setError('Please fill in all the fields')
      setLoading(false);
    } else {
      axios
        .post('/product/addProduct', { name, description, countInStock, voucherPrice, imageUrl, category, memberId: userInfo.data._id, claimedStatus: false })
        .then((res) => {
          setLoading(false);
          setMessage(res.data.message);
          setTimeout(() => {
            //reload the page
            window.location.reload();
          }, 2000)
        }
        )
        .catch((err) => {
          setLoading(false);
          setError(err.response.data.message);
        }
        );
    }
  }
  return (
    <><div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card" id="cardAccount">
            <div className="card-header">
              <h3>Add Product</h3>
              {message && <Message variant='success'>{message}</Message>}
              {error && <Message variant='danger'>{error}</Message>}
              {loading && <Loading />}
            </div>
            <div className="card-body">
              <form onSubmit={handleAddProductSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input type="text" className="form-control" id="description" placeholder="Enter description" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="countInStock">Count In Stock</label>
                  <input type="text" className="form-control" id="countInStock" placeholder="Enter count in stock" onChange={(e) => setCountInStock(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="voucherPrice">Voucher Price</label>
                  <input type="text" className="form-control" id="voucherPrice" placeholder="Enter voucher price" onChange={(e) => setVoucherPrice(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="imageUrl">Image Url</label>
                  <input type="text" className="form-control" id="imageUrl" placeholder="Enter image url" onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <input type="text" className="form-control" id="category" placeholder="Enter category" onChange={(e) => setCategory(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary btn-block" id="btn-addProduct">Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div><MemberProduct /></>
  )
}
export default AddProduct