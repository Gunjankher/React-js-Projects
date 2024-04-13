import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import "swiper/css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'

function Carousel() {


  return (
<div className='h-[600px] bg-white bg-gradient-to-b from-stone-900'>

<Swiper
className='h-[50%] '
centeredSlides = {true}
pagination = {{
    clickable : true
}}
spaceBetween={30}
navigation= {true}
modules={[Autoplay, Pagination , Navigation]}
autoplay = {{
    delay : 2500,
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

{/* <div className='h-[50%] bg-gradient-to-b from-stone-900' /> */}
</div>

  )
}

export default Carousel

