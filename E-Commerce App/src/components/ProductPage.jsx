import React, { useState , useEffect} from 'react'
import {useParams}from 'react-router-dom'
import { callAPI } from '../utlis/CallApi'
import ProductDetails from './ProductDetails'

function ProductPage() {
    const[product, setProduct] = useState(null)
    const{id} = useParams()

    const getProduct = ()=>{
        callAPI(`data/products.json`)
        .then((ProductResult)=>{
            setProduct(ProductResult[id])
        })
    }

    useEffect(()=>{
getProduct()
    },[])
if(!product?.title)return <h1>loading....</h1>

  return (
    <div className='h-screen bg-amazonclone-background'>
    <div className='min-w-[1000px] max-w-[1500px] m-auto bg-orange-400 '>
<div className='grid grid-cols-10 gap-2'>
<div className='col-span-3 bg-white p-8 m-auto'>
<img src={`${product.image}`} />
</div>
{/* middle */}
<div className='col-span-5 p-4 rounded bg-white divide-y divide-gray-500'>
<div>
<ProductDetails product={product} ratings={true} />
</div>
<div className='text-base xl:text-lg'> {product.description}</div>
</div>
{/* right */}
<div className='col-span-2 bg-white '>
  <div className='text-xl xl:text-2xl font-semibold'>{product.price}</div>
  <div className='text-base xl:text-lg font-semibold '>{product.oldPrice}</div>
  <div classname = 'text-sm xl:text-base font-semibold '>Free returns</div>
  <div className='text-sm xl:text-base font-semibold'>Free Delivery</div>
  <div className='text-base xl:text-lg font-semibold'>In Stock</div>
  <div className='text-base xl:text-lg'>Quantity:
<select>
  <option>1</option>
  <option>2</option>
  <option>3</option>
</select>
  </div>
<button>Add to Cart</button>
</div>
</div>
    </div>
    </div>
  )
}

export default ProductPage