import React from 'react';
import { useParams } from 'react-router-dom';
import data from './productData.json';
import Navbar from "./Navbar";
import WaitingListButton from "./WaitingListButton.js";
import './Product.css';
import AddToCart from "./AddToCart.js";

const Product = () => {
  const { id } = useParams();

  // Find the product with the matching ID
  const product = data.products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='productBody'>
      <Navbar />
      <div className='productBlock'>

        <img className="productImageOne" src={require(`./images/productImages/${product.id}.jpg`)} alt={product.name} />
        <div className='productInfo'>
          <h1>{product.name}</h1>

          <div className='productDescription'>
            <h2>{product.first_title}</h2>
            <p>{product.description}</p>
          </div>

          <div className='oneBlock'>{product.waiting_list ? (
  <WaitingListButton className='waitingButton' product={product} />
) : (
  <AddToCart />
)}</div>


        </div>
      </div>

      <div className='productBlock'>

        <div className='extendedProductInfo'>
          <h2>{product.second_title}</h2>
          <p>{product.extended_description}</p>
        </div>

        <img className="productImageTwo" src={require(`./images/productImages/${product.id}-2.jpg`)} alt={product.name} />
      
      </div>
      <div className='bottomButton'> {product.waiting_list && <WaitingListButton />} </div>
    </div>
  );
};

export default Product;
