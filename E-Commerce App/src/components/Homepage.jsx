import React from 'react'
import Carousel from './Carousel'
import HomeCard from './HomeCard'


function Homepage() {
  return (
    <div className='bg-amazonclone-background'>

<div className='min-w-[1000px] max-w-[1500px] m-auto'>

Homepage
<Carousel />
<div className='grid grid-cols-3 xl:grid-cols-4'>
<HomeCard 

/>

</div>
</div>
    </div>
  )
}

export default Homepage