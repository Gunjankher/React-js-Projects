import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import "swiper/css"
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import {Link} from "react-router-dom"

function CarouselProduct2() {
  return (
    <div className='bg-white  m-3 '>
        <div className='p-3 font-semibold text-xl'>Best Sellers</div>
<Swiper
className='p-2'
loop ={true}
slidesPerView={7}
spaceBetween={10}
navigation = {true}
modules={[Navigation]}
>

{
    Array.from({length : 9 },(_,i)=>
    
    <SwiperSlide key={i}>
<Link to={`/product/${i}`}>
<img className = "m-2"src={`../Images/Product_small/product_${i}_small.jpg`}/>
</Link>

    </SwiperSlide>
    
    
    )
}


</Swiper>


    </div>
  )
}

export default CarouselProduct2