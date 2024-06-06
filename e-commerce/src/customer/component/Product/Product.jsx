import React from 'react'
import ProductCard from './ProductCard'
import "./ProductCard.css";
// import { shirt1 } from '../../../assests';
import { shirt2 } from '../../../assests';


const Product = () => {
  const product = {
    name: 'Slim Fit Shirt',
    price: 29.99,
    image: {shirt2}, // Replace with a valid image URL
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#000000', '#ffffff', '#ff0000'],
    reviews: 4.5,
  };

  return (
    <div className="product-page">
      {/* <h1>Product Details</h1> */}
      <ProductCard product={product} />
    </div>
  );
};

export default Product