import React from 'react'

function HomepageCard({
    title,
    img,
    name1,
    name2,
    link
}) {


  return (
    <div className='h-[420px] bg-white '>

<div className='text-xl'>
    {title}
</div>

<div className=' flex '>

<div className='m-4'>
<img className='w-[140px] h-[120px] object-cover' src={img}  />
<div className='text-[12px]'>{name1}</div>
</div>

{/* <div className='m-4'>
<img className='w-[140px] h-[120px] object-cover' src={img}  />
<div className='text-[12px]'>{name2}</div>
</div> */}
</div>



    </div>
  )
}

export default HomepageCard