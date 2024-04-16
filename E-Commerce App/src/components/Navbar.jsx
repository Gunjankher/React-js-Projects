import React from 'react'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
import Search from './Search'

function Navbar() {
  return (
    <header className='m-w-[1000px]'>
       <div className='flex bg-amazonclone text-white h-[60px]'>
{/* left */}
<div className='flex items-center m-4'>
    <img className='h-[35px] w-[100px] m-2' src="Images/amazon.png"/>
  <div className='pr-4 pl-3'>
<div className='text-xs xl:text-sm'>Deliver to</div>
<div className='text-sm xl:text-base font-bold'>Ahmedabad</div>
    </div>  
</div>

{/* middle */}
<div className='flex reletive items-center grow' >
    <Search />
</div>
{/* right */}


<div className='flex items-center m-4'>
<div className='pr-4 pl-3'>
<div className='text-xs xl:text-sm'>Hello</div>
<div className='text-sm xl:text-base font-bold'>Sign in </div>
    </div>  
    <div className='pr-4 pl-3'>
<div className='text-xs xl:text-sm'>Return</div>
<div className='text-sm xl:text-base font-bold'>&Orders</div>
    </div>  

<div className='pl-3 pr-3 flex'>
<ShoppingCartIcon className='h-[48px]' />
<div className=' mt-7 text-xs xl:text-sm font-bold '>
    Cart
</div>
</div>

</div>

       </div>
       <div className='flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2'>
<div>Today's Deal </div>
<div>Customer Service</div>
<div>Prime</div>
<div>elctronices</div>
<div>Home kitchen</div>
<div>Mobiles</div>



       </div>
    </header>
  )
}

export default Navbar