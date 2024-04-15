import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import "swiper/css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'

function Carousel() {


  return (
<div className='h-[700px]'>

<Swiper
className='h-full'
centeredSlides = {true}
pagination = {{
    clickable : true
}}
spaceBetween={30}
navigation ={true}
modules={[Autoplay, Pagination , Navigation]}
autoplay = {{
    delay : 2500,
}}


>

<SwiperSlide><img src="../Images/carousel/carousel_1.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel/carousel_2.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel/carousel_3.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel/carousel_4.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel/carousel_5.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel/carousel_6.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel/carousel_7.jpg"/></SwiperSlide>
<SwiperSlide><img src="../Images/carousel/carousel_3.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel/carousel_4.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel/carousel_5.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel/carousel_6.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="../Images/carousel/carousel_7.jpg" alt="" /></SwiperSlide>


</Swiper>

{/* <div className='h-[50%] bg-gradient-to-b from-stone-700 ' /> */}
</div>

  )
}

export default Carousel

