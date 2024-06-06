import React
// , { useState } 
from 'react';
import "./ProductCard.css";
import { shirt1 } from '../../../assests';

const ProductCard = ({product}) => {
  // const [selectedSize, setSelectedSize] = useState('');
  // const [selectedColor, setSelectedColor] = useState('');

  // const handleSizeSelect = (size) => {
  //   setSelectedSize(size);
  // };

  // const handleColorSelect = (color) => {
  //   setSelectedColor(color);
  // };
  return <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
    <div>
    <img className='w-full h-full object-left-top object-cover ' src={shirt1} alt="" />
    </div>
    <div className="textpart bg-white p-3">
      <div>
        <p className='font-bold opacity-60' >Universal Outfit</p>
        <p>Casual Puff seelves solid white Top</p>
      </div>
      <div>
        <p className='font-semibold' >
        ₹500
        </p>
        <p className='line-through opacity-60' >
        ₹1999
        </p>
        <p className='text-green-600' >
        70% OFF   </p>
      </div>
    </div>
    </div>
    
};

export default ProductCard;
