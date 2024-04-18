// import React, { useEffect, useState } from 'react'
// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
// import { callAPI } from '../utlis/CallApi'
// import { useNavigate, createSearchParams } from 'react-router-dom'

// function Search() {

// const [suggestion , setSuggestion] = useState(null)
// const [searchTerm , SetsearchTerm] = useState("")
// const [catogary , setCatogarty] = useState("")
// const navigate = useNavigate()

// const onHandleSubmit = (e)=>{
// e.preventDefault()

// navigate({

//   pathname : "search",
//   search : `${
//     createSearchParams({

// catogary : `${catogary}`,
// searchTerm : `${searchTerm}`,

//     })
//   }`
// })
// setCatogarty("")
// setCatogarty("All")
// }


// const onHandleSubmit = (e) => {
//   e.preventDefault();

//   navigate({
//     pathname: "search",
//     search: `${createSearchParams({
//       category: `${category}`,
//       searchTerm: `${searchTerm}`,
//     })}`,
//   });

//   setSearchTerm("");
//   setCategory("All");
// };

// const getSuggestion = () => { 
// callAPI(`data/suggestion.json`)
// .then((suggestionResults)=>{
//   setSuggestion(suggestionResults)
// })

// }

// useEffect(()=>{
// getSuggestion()
// },[])

//   return (
//     <div className=' w-[100%]'>
//         <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
//         <select onChange={(e)=>setCatogarty(e.target.value) }
//         className='p-2 bg-gray-300 text-black border text-xs xl:text-sm'>
            
//         <option>All</option>
//           <option>Deals</option>
//           <option>Amazon</option>
//           <option>Fashion</option>
//           <option>Computers</option>
//           <option>Home</option>
//           <option>Mobiles</option>
//         </select>
//             <input className='flex grow items-center h-[100%] rounded-l text-black' type='text  ' value={searchTerm}
            
//             onClick ={(e)=>SetsearchTerm(e.target.value)}
//             />
//             <button onChange={onHandleSubmit}
//              className='w-[45px]'>
//                 <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900' />
//             </button>
//         </div>
//         {suggestion &&
//         <div className='bg-white tesxt-black w-full z-40 absolute text-black'>
// {
//   suggestion.filter((suggestion)=>{
//     const currentsearchTerm = searchTerm.toLowerCase()
//     const title = suggestion.title.toLowerCase()
// return(
//   currentsearchTerm && 
//   title.startsWith(currentsearchTerm)&&
//   title !== currentsearchTerm
// )
//   })
//   .slice(0,10)
//   .map((suggestion)=>(
//     <div key={suggestion.id} onClick={()=>SetsearchTerm(suggestion.title)}>
//       {suggestion.title}
//     </div>
//   ))
// }
//         </div>
//         }
//     </div>
//   )
// }

// export default Search


import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

import { callAPI } from "../utlis/CallApi";

const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };

  const getSuggestions = () => {
    callAPI(`data/suggestion.json`).then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 bg-gray-300 text-black border text-xs xl:text-sm"
        >
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input
          className="flex grow items-center h-[100%] rounded-l text-black"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onHandleSubmit} className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && (
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => setSearchTerm(suggestion.title)}
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;