import React from "react";
import { CardData } from "../../../constant";
// import { shirt1 } from "../../../assests";
import AliceCarousel from "react-alice-carousel";

const HomeSectionCard = (item) => {
    //     const items = CardData.map((item) => (
    //     <div key={item.imageId}>
    //       <img src={item.image} alt="" />
    //     </div>
    //   ));
  return (
    <div
      className="flex flex-col bg-white cursor-pointer items-center 
    rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem] ">
      <img className="object-cover object-top w-full h-full" src={item} alt="" />
      </div>

      <div className="p-4" >
        <h3 className="text-lg font-medium text-grey-900" >
            slim fit Shirts 
        </h3>
        <p className="text-sm font-medium text-grey-500 mt-2" >Men Solid pure cotton shirt</p>
    </div>
    </div>
    
  );
};

export default HomeSectionCard;
