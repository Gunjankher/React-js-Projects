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

<SwiperSlide>
<div><img 
       className='mx-10 h-[180px] w-[158px] ml-[20px] px-2 py-1'
       src="../Images/CarouselProduct/car_product_1.jpg"/>
<div className='mx-8 text-[15px] text-red-500 font-semibold'> upto 90% off</div>
<div className='mx-8 '>price 10000 andsfsfs</div>

</div>
</SwiperSlide>
<SwiperSlide>
<div><img 
       className='mx-10 h-[180px] w-[158px] ml-[20px] px-2 py-1'
       src="../Images/CarouselProduct/car_product_2.jpg"/>
<div className='mx-8 text-[15px] text-red-500 font-semibold'> upto 90% off</div>
<div className='mx-8 '>price 10000 andsfsfs</div>

</div>
</SwiperSlide>
<SwiperSlide>
<div><img 
       className='mx-10 h-[180px] w-[158px] ml-[20px] px-2 py-1'
       src="../Images/CarouselProduct/car_product_3.jpg"/>
<div className='mx-8 text-[15px] text-red-500 font-semibold'> upto 90% off</div>
<div className='mx-8 '>price 10000 andsfsfs</div>

</div>
</SwiperSlide>
<SwiperSlide>
<div><img 
       className='mx-10 h-[180px] w-[158px] ml-[20px] px-2 py-1'
       src="../Images/CarouselProduct/car_product_4.jpg"/>
<div className='mx-8 text-[15px] text-red-500 font-semibold'> upto 90% off</div>
<div className='mx-8'>price 10000 andsfsfs</div>

</div>
</SwiperSlide>
<SwiperSlide>
<div><img 
       className='mx-10 h-[180px] w-[158px] ml-[20px] px-2 py-1'
       src="../Images/CarouselProduct/car_product_5.jpg"/>
<div className='mx-8 text-[15px] text-red-500 font-semibold'> upto 90% off</div>
<div className='mx-8 '>price 10000 andsfsfs</div>

</div>
</SwiperSlide>
<SwiperSlide>
<div><img 
       className='mx-10 h-[180px] w-[158px] ml-[20px] px-2 py-1'
       src="../Images/CarouselProduct/car_product_6.jpg"/>
<div className='mx-8 text-[15px] text-red-500 font-semibold'> upto 90% off</div>
<div className='mx-8 '>price 10000 andsfsfs</div>

</div>
</SwiperSlide>
<SwiperSlide>
<div><img 
       className='mx-10 h-[180px] w-[158px] ml-[20px] px-2 py-1'
       src="../Images/CarouselProduct/car_product_1.jpg"/>
<div className='mx-8 text-[15px] text-red-500 font-semibold'> upto 90% off</div>
<div className='mx-8'>price 10000 andsfsfs</div>

</div>
</SwiperSlide>
<SwiperSlide>
<div><img 
       className='mx-10 h-[180px] w-[158px] ml-[20px] px-2 py-1'
       src="../Images/CarouselProduct/car_product_2.jpg"/>
<div className='mx-8 text-[15px] text-red-500 font-semibold'> upto 90% off</div>
<div className='mx-8 text-nowrap'>price 10000 andsfsfs</div>

</div>
</SwiperSlide>
<SwiperSlide>
<div><img 
       className='mx-10 h-[180px] w-[158px] ml-[20px] px-2 py-1'
       src="../Images/CarouselProduct/car_product_3.jpg"/>
<div className='mx-8 text-[15px] text-red-500 font-semibold'> upto 90% off</div>
<div className='mx-8 text-nowrap'>price 10000 andsfsfs</div>

</div>
</SwiperSlide>
<SwiperSlide>
<div><img 
       className='mx-10 h-[180px] w-[158px] ml-[20px] px-2 py-1'
       src="../Images/CarouselProduct/car_product_1.jpg"/>
<div className='mx-8 text-[15px] text-red-500 font-semibold'> upto 90% off</div>
<div className='mx-8 text-nowrap'>price 10000 andsfsfs</div>

</div>
</SwiperSlide>

       </Swiper>
    </div>
  )
}

export default CarouselProduct

