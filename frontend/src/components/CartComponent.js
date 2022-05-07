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
function CartModal() {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ProductInfo = JSON.parse(localStorage.getItem('cart'));
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const createOrder = () => {
    if (ProductInfo === null || ProductInfo === undefined) {
      setError('Please add products to cart');
      setTimeout(() => {
      window.location.reload();
      }, 2000);
    } else {

      //get voucherPrice and reduce array into one number for subtotal
      const findVoucherPrice = ProductInfo.map(item => {
        return item.data.voucherPrice;
      })
      const findTotalPrice = findVoucherPrice.reduce((a, b) => a + b, 0);

      //get product
      const findProduct = ProductInfo.map(item => {
        return item.data;
      })

      console.log(userInfo.data.emailAddress);
      console.log(findProduct);
      console.log(findTotalPrice);

      axios
        .post( '/order/newOrder', {
          emailAddress: userInfo.data.emailAddress,
          product: findProduct,
          subtotal: findVoucherPrice,
        })
        .then(res => {
          setMessage(res.data.message);
          setTimeout(() => {
            setShow(false);
            setMessage('');
            setCart([]);
          }, 2000);
        })
        .catch(err => {
          setError(err.response.data.message);
          setTimeout(() => {
            setError('');
          }
          , 2000);
        });
    }
  }

  return (
    <>
      <Nav.Link id="nav-cart" onClick={handleShow}>Cart
      </Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
          {message && <Message variant='success'>{message}</Message>}
          {error && <Message variant='danger'>{error}</Message>}
        </Modal.Header>
        <Modal.Body>
          {ProductInfo ? (
            <><div>
              {ProductInfo.map((product) => (
                <div key={product.data._id}>
                  <div className="cart-product">
                    <div className="cart-product-id">ID: {product.data._id}</div>
                  </div>
                  <div className="cart-product-info">
                    <div className="cart-product-name">Name:{product.data.name}</div>
                    <div className="cart-product-price">
                      Price: {product.data.voucherPrice}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {ProductInfo.map((product) => (
                <div key={product.data._id}>
                  <Button
                    variant="danger"
                    onClick={() => {
                      const cart = JSON.parse(localStorage.getItem('cart'));
                      const newCart = cart.filter(
                        (item) => item.data._id !== product.data._id
                      );
                      localStorage.setItem('cart', JSON.stringify(newCart));
                      setCart(newCart);
                    }}>Delete
                  </Button>
                </div>
              ))}
              <div className="cart-item-count">
                <div className="cart-item-count-label">Item Count:</div>
                <div className="cart-item-count-value">
                  {ProductInfo.length}
                </div>
              </div>
              <div className="cart-total-price">
                <div className="cart-total-price-label">Total Vouchers Cost:</div>
                <div className="cart-total-price-value">
                  {ProductInfo.reduce((total, product) => {
                    return total + product.data.voucherPrice;
                  }, 0)}
                </div>
              </div>
              </>
          ) : (
            <div>
              <h1>No products in cart</h1>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            localStorage.removeItem('cart');
            setCart([]);
          }
          }>
            Clear Cart
          </Button>
          <Button variant="primary" onClick={createOrder}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal;