import React from 'react'
import MainCarosel from '../../customer/component/HomeCarosel/MainCarosel'
import { HomeSectionCarosel } from '../../customer/component'

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <section>
        <HomeSectionCarosel />
      </section>
    </div>
  )
}

export default HomePage
