import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { CardData } from '../../../constant';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';


const HomeSectionCarosel = () => {
    const repsonsive ={
        0:{items : 1},
        720:{items: 3},
        1024:{items:5},
    };

        // const items = CardData.map((item) => (
    //     <div key={item.imageId}>
    //       <img src={item.image} alt="" />
    //     </div>
    //   ));
    const items = CardData.map((item) => (
      <HomeSectionCard  />
      ));
  return (
    <div>
                    <AliceCarousel
                mouseTracking
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={2000}
                infinite
                responsive={repsonsive}
            />
            
      
    </div>
  )
}

export default HomeSectionCarosel
