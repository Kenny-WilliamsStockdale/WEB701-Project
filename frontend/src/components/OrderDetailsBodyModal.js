/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React from 'react'
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
// get OrderInfo for use in modal body on OrderDetailsModal
function OrderDetailsBodyModal() {
  const orderInfo = JSON.parse(localStorage.getItem('orderInfo'));




  return (
    <div>
      <h5>Order ID: {orderInfo.data._id}</h5>
      <h5>Order Products:</h5>
        {orderInfo.data.products.map(product => {
          return (
            <div key={product._id}>
              <h6>Product ID: {product._id}</h6>
              <h6>Product Name:{product.name}</h6>
              <h5>Order Status: {orderInfo.data.statusCompleted ? 'Completed' : 'Pending'}</h5>
            </div>
          )
        }
        )}
      <h5>Order Total: {orderInfo.data.subtotal} Tokens</h5>
      <div>
      <p>Please get in touch with Stuff and Things Clothing Charity to claim your order. Thanks!</p>
    </div>
    </div>
  )
}
export default OrderDetailsBodyModal;
