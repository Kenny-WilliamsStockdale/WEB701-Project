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
    navigate(`/ProductDetail/${product._id}`);

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
      </Card.Body>
    </Card>
  );
};

export default Product;
