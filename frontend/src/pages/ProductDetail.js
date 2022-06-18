/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../components/Loader';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Message from '../components/Message';
import axios from 'axios';
import './ProductDetail.css'
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
//get product by id and view
const ProductDetails = () => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  //add product to cart
  const handleClaim = () => {
    const product = products;
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      if (cart.find(item => item.data._id === product.data._id)) {
        setError('Product already in cart');
      }
      if (cart.length >= 1)
        setError('Cart already contains a product');
      // cart.push(product);
      // localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      // set timeout and add item to cart
      localStorage.setItem('cart', JSON.stringify([product]));
      setMessage('Item added to cart');
    }
  }
  //get product by id

  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `/product/viewProduct/${id}`
        );
        setProducts(res.data);
        setLoading(false);
        setMessage('');
        setError('');
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  return (
    <div className="product-container">
      <div className="product-detail">
        <div className="product-detail-image">
          <img className="product-image" src={products.data.imageUrl} alt="product" />
        </div>
      </div>
      <div className="product-detail-info">
        <h1>{products.data.name}</h1>
        <p>{products.data.description}</p>
        <p>
          <strong>Quantity:</strong> {products.data.countInStock}
        </p>
        <p>
          <strong>Price:</strong> {products.data.voucherPrice} Tokens
        </p>
        <Link to="/Product">
          <Button variant="primary" id="btn-back">Back</Button>
        </Link>
          <Button variant="primary" id="btn-claim" onClick={handleClaim}>Claim</Button>
        {message && <Message variant='success' id="prod-detail-success-msg">{message}</Message>}
        {error && <Message variant='danger' id="prod-detail-error-msg">{error}</Message>}
      </div>
    </div>
  );
}

export default ProductDetails;