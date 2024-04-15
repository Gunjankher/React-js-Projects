import React from 'react'

function HomeCard({
title,
name1,
name2,
name3,
name4,
img1,
img2,
img3,
img4,


}) {
  return (
    
    <div className=' w-[250px]h-[349px] bg-white p-5 z-30 relative -top-80'>
        <div className='text-lg font-bold ml-5'>{title}</div>

<div className='flex gap-5 px-5 '> 

<div>
<div><img className='w-[124px] h-[93px]' src={img1}  /></div>
<div>{name1}</div>
<div><img className='w-[124px] h-[93px]' src={img2}  /></div>
<div>{name2}</div>
</div>

<div>
<div><img className='w-[124px] h-[93px]' src={img3}  /></div>
<div>{name3}</div>
<div><img className='w-[124px] h-[93px]' src={img4} /></div>
<div>{name4}</div>
</div>

</div> 
<div className='ml-5'><a href="see more">see more</a></div>
</div> 

  )
}

export default HomeCard