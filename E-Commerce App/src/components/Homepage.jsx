import React from 'react'
import Carousel from './Carousel'
import HomepageCard from './HomepageCard'
import HomePageCardPage from '../../pages/HomePageCardPage'

function Homepage() {
  return (
    <div className='bg-amazonclone-background'>

<div className='min-w-[1000px] max-w-[1500px] m-auto'>

Homepage
<Carousel />
<HomePageCardPage
/>
</div>
    </div>
  )
}

export default Homepage