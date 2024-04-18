import React, { useState , useEffect} from 'react'
import {useParams}from 'react-router-dom'
import { callAPI } from '../utlis/CallApi'
import ProductDetails from './ProductDetails'
import {GB_CURRENCY} from '../utlis/constants' 
import { addToCart } from '../store/cartSlice'
import { useDispatch } from 'react-redux'


function ProductPage() {
    const[product, setProduct] = useState(null)
    const{id} = useParams()
    const dispatch = useDispatch()

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
    <div className='min-w-[1000px] max-w-[1500px] m-auto p-4'>
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
<div className='col-span-2 bg-white p-4 '>
  <div className='text-xl xl:text-2xl font-semibold text-red-400 text-right'>{ GB_CURRENCY.format(product.price)}</div>
  <div className='text-base xl:text-lg font-semibold text-gray-500  text-right'> RRP: <span className="line-through">
                  {GB_CURRENCY.format(product.oldPrice)}
                </span></div>
  <div className = 'text-sm xl:text-base font-semibold text-blue-500 mt-3'>Free returns</div>
  <div className='text-sm xl:text-base font-semibold mt-1 text-blue-500'>Free Delivery</div>
  <div className='text-base xl:text-lg font-semibold mt-1 text-green-600'>In Stock</div>
  <div className='text-base xl:text-lg mt-1'>Quantity:
<select className= "p-2 bg-white border rounded-md focus:border-indigo-600 mx-1">
  <option>1</option>
  <option>2</option>
  <option>3</option>
</select>
  </div>
<button onClick={()=> dispatch(addToCart())} className='bg-yellow-400 w-full p-3 text-xs xl:text-sm rounded hover:bg-yellow-500 m-3 '>Add to Cart</button>
</div>
</div>
    </div>
    </div>
  )
}

export default ProductPage