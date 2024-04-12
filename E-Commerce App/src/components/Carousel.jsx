import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import "swiper/css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'

function Carousel() {


  return (
<div className='h-[600px] bg-white swiper-wrapper '>

<Swiper
className='h-[50%]'
loop ={true}
pagination = {{
    clickable : true
}}
spaceBetween={0}
navigation= {true}
modules={[Autoplay, Pagination , Navigation]}
autoplay = {{
    delay : 2500,
    disableOnInteraction : false
}}


>

<SwiperSlide><img src="../Images/carousel_1.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel_2.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel_3.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel_4.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel_5.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel_6.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel_7.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel_3.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel_4.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel_5.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel_6.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel_7.jpg" alt="" /></SwiperSlide>


</Swiper>
</div>
  )
}

export default Carousel