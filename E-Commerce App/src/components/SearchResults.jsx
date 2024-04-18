import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { callAPI } from '../utlis/CallApi'




function SearchResults() {
  const [searchParams] = useSearchParams()
  const [products , setProducts] = useState(null)

const getSearchResults = ()=>{
  const searchTerm  = searchParams.get("searchTerm")
  const catogary = searchParams.get("category")
callAPI(`data/search.json`)
.then((SearchResults)=>{
const categoryResults = SearchResults[catogary]
if(searchTerm){
const results = categoryResults.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
setProducts(results)
}

})

}


useEffect(()=>{
getSearchResults()
},[searchParams])
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults