import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import "swiper/css"
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'

function CarouselProduct2() {
  return (
    <div className='bg-white  m-3 '>
        <div className='p-3 font-semibold text-xl'>Best Sellers</div>
<Swiper
className='p-2'
slidesPerView={7}
spaceBetween={10}
navigation = {true}
modules={[Navigation]}
>

{
    Array.from({length : 9},(_,i)=>
    
    <SwiperSlide>
<img className = "m-2"src={`../Images/Product_small/product_${i}_small.jpg`}/>

    </SwiperSlide>
    
    
    )
}


</Swiper>


    </div>
  )
}

export default CarouselProduct2