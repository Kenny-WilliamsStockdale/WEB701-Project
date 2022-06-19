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
  const [emailAddress, setEmailAddress] = useState('');
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

      //get product _id and reduce array into string format for productId
      const findProductId = ProductInfo.map(item => {
        return item.data._id;
      })
      //findProductId array into string format for productId
      const findProductIdString = findProductId.toString();


      // post to database
      axios
        .post('/order/newOrder', {
          emailAddress: userInfo.data.emailAddress,
          productId: findProductIdString,
          product: findProduct,
          subtotal: findTotalPrice,
        })
        .then(res => {
          setMessage(res.data.message);
          setTimeout(() => {
            setShow(false);
            setMessage('');
            localStorage.removeItem('cart');
          }, 2000);
        })
        .catch(err => {
          setError(err.response.data.message);
          setTimeout(() => {
            setError('');
          }
            , 2000);
        });
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
      // update product countInStock by _id and minus 1
      ProductInfo.map(item => {
        axios
          .put('/product/updateProduct', {
            _id: item.data._id,
            countInStock: item.data.countInStock - 1,
          })
          .then(res => {
            console.log(res);

          }
          )
          .catch(err => {
            console.log(err);
          }
          )
      })
      //minus a isBeneficiary token from their account
      

      // reload window after 2.5 seconds
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }
  }
  useEffect(() => {
  }
    , [])


  return (
    <>
      <Nav.Link id="nav-cart" onClick={handleShow}>Cart
      </Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        {message && <Message variant='success'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
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
              <div className="cart-item-count">
                <div className="cart-item-count-label"></div>
                <div className="cart-item-count-value">Item Count:
                  {ProductInfo.length}
                </div>
              </div>
              <div className="cart-total-price">
                <div className="cart-total-price-label"></div>
                <div className="cart-total-price-value">Total Tokens Cost:
                  {ProductInfo.reduce((total, product) => {
                    return total + product.data.voucherPrice;
                  }, 0)}
                </div>
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
                      localStorage.removeItem('cart');
                      setCart([]);
                    }}>Delete
                  </Button>
                </div>
              ))}
            </>
          ) : (
            <div>
              <h1>No products in cart</h1>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
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