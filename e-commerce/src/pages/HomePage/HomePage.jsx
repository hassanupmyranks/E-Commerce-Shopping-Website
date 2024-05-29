import React from 'react'
import MainCarosel from '../../customer/component/HomeCarosel/MainCarosel'
import { HomeSectionCarosel } from '../../customer/component'

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className='p-5 flex-col justify-center' >
        <HomeSectionCarosel />
        <HomeSectionCarosel />
        <HomeSectionCarosel />
        <HomeSectionCarosel />
      </div>
    </div>
  )
}

export default HomePage
