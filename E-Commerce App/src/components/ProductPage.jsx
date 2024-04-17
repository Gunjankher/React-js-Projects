import React, { useState , useEffect} from 'react'
import {useParams}from 'react-router-dom'
import { callAPI } from '../utlis/CallApi'

function ProductPage() {
    const[product, setProduct] = useState(null)
    const{id} = useParams()

    const getProduct = ()=>{
        callAPI(`data/products.json`)
        .then((ProducutResult)=>{
            setProduct(ProducutResult[id])
        })
    }

    useEffect(()=>{
getProduct()
    },[])
if(!product?.title)return <h1>loading....</h1>

  return (
    <div className='h-screen bg-amazonclone-background'>
    <div className='min-w-[1000px] max-w-[1500px] m-auto bg-orange-400 '>
<div className='grid grid-cols-10'>
<div className='col-span-3 bg-blue-400 p-8 '>
<img src={`${product.title}`} />
</div>
{/* middle */}
<div className='col-span-5 bg-pink-500'>
hi
</div>
{/* right */}
<div className='col-span-2 bg-yellow-400'>
  hi
</div>

</div>
    </div>
    </div>
  )
}

export default ProductPage