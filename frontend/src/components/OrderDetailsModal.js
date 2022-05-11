/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import OrderDetailsBodyModal from './OrderDetailsBodyModal';
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
function OrderDetailsModal(token) {
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [OrderInfo, setOrderInfo] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const orderInfo = JSON.parse(localStorage.getItem('orderInfo'));

  // get list of orders from database relating to current user
  const ViewOrder = () => {
    axios
      .post('/order/view/', {
        emailAddress: userInfo.data.emailAddress,
        tokenId: token.token
      })
      //store response data to localStorage as set response data to state OrderInfo
      .then(res => {
        localStorage.setItem('orderInfo', JSON.stringify(res.data));
        setOrderInfo(res.data);
        // pass in orderInfo to OrderDetailsBodyModal upon return
        handleShow(OrderInfo);
      }
      )
      .catch(err => {
        setError(err.response.data.message);
      }
      )
  }

  //update order status
  const updateOrderStatus = () => {
    if (orderInfo.data.statusCompleted === false) {
      orderInfo.data.statusCompleted = true;
      localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
      setOrderInfo(orderInfo);
      //TODO:push info to database for update
    } else {
      orderInfo.data.statusCompleted = false;
      localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
      setOrderInfo(orderInfo);
    }
  }


  // modal
  return (
    <div>
      <Button variant="primary" onClick={() => ViewOrder()}>
        Order Details
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OrderDetailsBodyModal orderInfo={OrderInfo} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={ updateOrderStatus }>
            Update order status
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default OrderDetailsModal;