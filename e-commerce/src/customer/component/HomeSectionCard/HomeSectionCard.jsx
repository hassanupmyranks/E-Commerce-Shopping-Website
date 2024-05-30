import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div
      className="flex flex-col bg-white cursor-pointer items-center 
    rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-grey  p-5"
    >
      <div className="h-[13rem] w-[10rem] ">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-grey-900 text-left">
          {product.brand}
        </h3>
        <p className="text-sm font-medium text-grey-500 mt-2">
          {product.title}
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
