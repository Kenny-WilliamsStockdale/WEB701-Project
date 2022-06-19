/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import Message from './Message';
import OrderDetailsBodyModal from './OrderDetailsBodyModal';
import './UpdateClaimModal.css';
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
function OrderDetailsModal(product) {
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [OrderInfo, setOrderInfo] = useState([]);
  const [message, setMessage] = useState('');
  const [claimCode, setClaimCode] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const orderInfo = JSON.parse(localStorage.getItem('orderInfo'));

  const ShowOrder = () => {
    axios
      .post('/order/view/', {
        emailAddress: userInfo.data.emailAddress,
        productId: product.product._id,
      })
      .then(res => {
        localStorage.setItem('orderInfo', JSON.stringify(res.data));
        setOrderInfo(res.data);
        handleShow(product);
      }
      )
      .catch(err => {
        setError(err.response.data.message);
      }
      )
  }
  //compare product id's and update the current order statusCompleted to true
  const UpdateOrder = () => {
    if (product.product._id === claimCode) {
      axios
        .post('/order/claim/', {
          emailAddress: userInfo.data.emailAddress,
          productId: product.product._id
        })
        .then(res => {
          setMessage("Order Confirmed");
          setClaimCode(res.data.claimCode);
          setOrderInfo(res.data);
          handleShow(OrderInfo);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
        )
        .catch(err => {
          setError(err.response.data.message);
        }
        )
    }
    else {
      setError("Invalid Claim Code");
    }
  }

  // modal
  return (
    <div>
      <Button variant="primary" onClick={() => ShowOrder()}>
        Update Claim
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Update Claim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Card Form */}
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3" id="claim-modal">
                {message && <Message variant='success'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                <form>
                  <div className="form-group">
                    <label htmlFor="productId">Product ID</label><input
                      readOnly
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={product.product._id} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="claimCode">Claim code</label><input
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={claimCode}
                      onChange={(e) => setClaimCode(e.target.value)} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => UpdateOrder()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default OrderDetailsModal;