import React from 'react'
import MainCarosel from '../../customer/component/HomeCarosel/MainCarosel'
import { HomeSectionCarosel } from '../../customer/component'
import { mens_kurta } from '../../assests/Kurta/Kurta'
import Footer from '../../customer/component/Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className='py-20 space-y-10 flex flex-col justify-center' >
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Kurta"} />
        {/* <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Kurta"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's shoes"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Kurta"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Saree"} /> */}

      </div>
      <Footer />
    </div>
  )
}

export default HomePage

