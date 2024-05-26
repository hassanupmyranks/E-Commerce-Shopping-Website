import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { CarouselData } from '../../../constant';
import 'react-alice-carousel/lib/alice-carousel.css';
// import { useHistory } from 'react-router-dom'; // Import useHistory hook



const MainCarosel = () => {


    const items = CarouselData.map((img,index)=>(
      <div  key={img.imageId}  >
        <img className='cursor-pointer'  src={img.image} alt="carouselImg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    ))


  return (
    <div>
            <AliceCarousel
                mouseTracking
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={2000}
                infinite
            />
    </div>
  )
}

export default MainCarosel
