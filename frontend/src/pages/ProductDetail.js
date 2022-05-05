/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../components/Loader';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import './ProductDetail.css'
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */
//get product by id and view
const ProductDetails = () => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `/product/viewProduct/${id}`
        );
        setProducts(res.data);
        setLoading(false);
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
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="product-container">
      <div className="product-detail">
        <div className="product-detail-image">
          <img className="product-image" src={products.data.imageUrl} alt="product" />
        </div>
        <div className="product-detail-info">
          <h1>{products.data.name}</h1>
          <p>{products.data.description}</p>
          <p>
            <strong>Price:</strong> {products.data.voucherPrice}
          </p>
          <p>
            <strong>Quantity:</strong> {products.data.countInStock}
          </p>
          <Link to="/Product">
            <Button variant="primary">Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;