import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import "swiper/css"
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'

function CarouselProduct() {
  return (
    <div className='-mt-72 bg-white gap-5'>
      <div 
      className='p-5 text-xl font-semibold'
      >Today's Deals</div>
       <Swiper 
       slidesPerView={6}
       spaceBetween={10}
       navigation = {true}
       modules={[Navigation]}
 >

  <div className='bg-white '>
<SwiperSlide>
<div 
className='w-[200px] h-[190px] bg-slate-200 mx-5 gap-x-5 '
>
       <img 
       className='mx-10 h-[180px] w-[158px] ml-[20px] px-2 py-1'
       src="../Images/CarouselProduct/car_product_1.jpg"/>
</div>
<div className='flex box-border'>
  <div className='ml-5 m-1 w-[70px] h-[20px] bg-red-600 rounded-sm text-center text-[10px] text-white font-semibold box-border'>Upto 38% off</div>
  <div className='-mr-16 pl-4 text-[13px] mt-1 text-red-600 font-semibold '>limited time-deal</div>
</div>
</SwiperSlide>


<SwiperSlide>
<div 
className='w-[200px] h-[190px] bg-slate-200 mx-5'
>
       <img 
       className='mx-10 h-[180px] w-[158px] ml-[20px] px-2 py-1'
       src="../Images/CarouselProduct/car_product_1.jpg"/>
</div>
<div className='flex box-border'>
  <div className='ml-5 m-1 w-[70px] h-[20px] bg-red-600 rounded-sm text-center text-[10px] text-white font-semibold box-border'>Upto 38% off</div>
  <div className='-mr-16 pl-4 text-[13px] mt-1 text-red-600 font-semibold '>limited time-deal</div>
</div>
</SwiperSlide>

       </div>

       </Swiper>
    </div>
  )
}

export default CarouselProduct