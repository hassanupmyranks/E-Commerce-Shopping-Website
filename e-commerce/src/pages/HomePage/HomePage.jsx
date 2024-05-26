import React from 'react'
import MainCarosel from '../../customer/component/HomeCarosel/MainCarosel'
import { HomeSectionCard } from '../../customer/component'

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <section>
        <HomeSectionCard />
      </section>
    </div>
  )
}

export default HomePage
