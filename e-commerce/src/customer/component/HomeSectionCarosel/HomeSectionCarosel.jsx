import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
// import { CardData } from "../../../constant";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Button from "@mui/material/Button";

const HomeSectionCarosel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const repsonsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 6 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncIndex = ({ item }) => setActiveIndex(item);

  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1].map(
    (item) => <HomeSectionCard />
  );
  return (
    <div className=" p-5 px-2 lg:px-8 ">
      <div className="relative p-5 border border-black ">
        <AliceCarousel
          items={items}
          disableDotsControls
          disableButtonsControls
          infinite
          responsive={repsonsive}
          onSlideChanged={syncIndex}
          activeIndex={activeIndex}
        />
        <Button
          className="z-50"
          onClick={slideNext}
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: " rotate(90deg)", color: "black" }}
          />
        </Button>
        <Button
          className="z-50"
          onClick={slidePrev}
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "-4rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: " rotate(-90deg)", color: "black" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
