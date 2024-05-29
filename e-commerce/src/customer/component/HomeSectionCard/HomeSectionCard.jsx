import React from "react";
// import { CardData } from "../../../constant";
import { shirt1 } from "../../../assests";
// import AliceCarousel from "react-alice-carousel";

const HomeSectionCard = () => {
  //   const items = CardData.map((item) => (
  //   <div key={item.imageId}>
  //     <img src={item.image} alt="" />
  //   </div>
  // ));
  // console.log(items)

  return (
    <div
      className="flex flex-col bg-white cursor-pointer items-center 
    rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-grey  p-5"
    >
      <div className="h-[13rem] w-[10rem] ">
        <img
          className="object-cover object-top w-full h-full"
          src={shirt1}
          alt=""
        />
      </div>

      <div className="pt-5">
        <h3 className="text-lg font-medium text-grey-900 text-left" >SLIM FIT SHIRTS</h3>
        <p className="text-sm font-medium text-grey-500 mt-2">
          Men Solid pure cotton shirt
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
