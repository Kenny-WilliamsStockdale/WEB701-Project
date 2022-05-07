/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Loading from './Loader';
import { Button, Modal, Nav } from 'react-bootstrap';

import axios from 'axios';
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
function CartModal() {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ProductInfo = JSON.parse(localStorage.getItem('cart'));

  return (
    <>
      <Nav.Link id="nav-cart" onClick={handleShow}>Cart
      </Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
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
              {/* delete single tem from the cart*/}
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
          <Button variant="primary" onClick={handleClose}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal;