/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";


/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
// product cards component and navigation, on click to product specifics

const Product = ({product}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Product/${product.id}`);

  }
  return (
    <Card className="product-card" onClick={handleClick}>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>
          <strong>Price:</strong> {product.voucherPrice}
        </Card.Text>
        <Card.Text>
          <strong>Quantity:</strong> {product.countInStock}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;