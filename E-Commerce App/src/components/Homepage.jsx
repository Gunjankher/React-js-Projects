import React from 'react'
import CarouselPage from '../../pages/CarouselPage'
import HomeCardPage from '../../pages/HomeCardPage'
import CarouselProductPage from '../../pages/CarouselProductPage'


function Homepage() {
  return (
    <div className='bg-amazonclone-background'>

<div className='min-w-[1000px] max-w-[1500px] m-auto'>

Homepage
<CarouselPage />
<HomeCardPage />
<CarouselProductPage />


</div>
    </div>
  )
}

export default Homepage