import React from 'react';
import './ProductPrice.css';
import data from './productData.json';

const ProductPrice = ({ productId }) => {
    // Find the product with the matching ID
    const selectedProduct = data.products.find(product => product.id == productId);

    // Check if the product with the given ID exists
    if (!selectedProduct) {
        return <div className="product-price">Product not found</div>;
    }

    return (
            <div className='price-box'>
                <p className="price">{selectedProduct.price}</p>
                <p className="currency">{selectedProduct.currency}</p>
            </div>
    );
};

export default ProductPrice;
