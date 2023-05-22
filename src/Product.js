import React from 'react';
import { useParams } from 'react-router-dom';
import data from './productData.json';

const Product = () => {
  const { id } = useParams();

  // Find the product with the matching ID
  const product = data.products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.extendedDescription}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default Product;
