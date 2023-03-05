import React, { Fragment } from 'react'
import NewArrivals from './NewArrivals'
import HeroSection from './HeroSection'
import Banner from './Banner'
import PopularProducts from './PopularProducts'

function Home() {
  return (
    <Fragment>
          <HeroSection/>
          <NewArrivals/>
          <Banner/>
          <PopularProducts/>
    </Fragment>
  )
}

export default Home