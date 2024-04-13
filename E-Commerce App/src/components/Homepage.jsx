import React from 'react'
import Carousel from './Carousel'
import HomepageCard from './HomepageCard'

function Homepage() {
  return (
    <div className='bg-amazonclone-background'>

<div className='min-w-[1000px] max-w-[1500px] m-auto'>

Homepage
<Carousel />
<div className='grid grid-cols-3 xl:grid-cols-4'>

<HomepageCard
title={"Appliances for your home | Up to 55% off"}
name1 = {"Air Conditior"}
img = {'../Images/homecard_1.jpg'}
/>

<div>3</div>
<div>4</div>
</div>

</div>
    </div>
  )
}

export default Homepage