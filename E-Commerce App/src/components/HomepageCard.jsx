// import React from 'react'

// function HomepageCard({
//     title,
//     img,
//     name1,
//     name2,
//     link
// }) {


//   return (
//     <div className='h-[420px] bg-white '>
// <div className='text-xl block'>

//     {title}
// </div>

// <div className=' flex '>

// <div className='m-4'>
// <img className='w-[140px] h-[120px] object-cover' src={img}  />
// <div className='text-[12px]'>{name1}</div>
// </div>

// </div>



//     </div>
//   )
// }

// export default HomepageCard

import React from 'react';

function HomepageCard({ title, img,img2, img3,img4, name1, name2, name3,name4, link }) {
  return (
    <div className='h-[420px] bg-white'>
      {title && <div className='text-xl block mx-4 font-semibold '>{title}</div>}

      <div className='flex'>
        <div className='m-4'>
          <img className='w-[140px] h-[120px] object-cover' src={img} alt='Image 1' />
          <div className='text-[12px]'>{name1}</div>
        </div>
        {/* Repeat this block for the other images */}

        <div className='m-4'>
          <img className='w-[140px] h-[120px] object-cover' src={img2} alt='Image 2' />
          <div className='text-[12px]'>{name2}</div>
        </div>
        
      </div>
      <div className='flex'>
        <div className='m-4'>
          <img className='w-[140px] h-[120px] object-cover' src={img3} alt='Image 1' />
          <div className='text-[12px]'>{name3}</div>
        </div>
        {/* Repeat this block for the other images */}

        <div className='m-4'>
          <img className='w-[140px] h-[120px] object-cover' src={img4} alt='Image 2' />
          <div className='text-[12px]'>{name4}</div>
        </div>
        
      </div>
    </div>
  );
}

export default HomepageCard;
