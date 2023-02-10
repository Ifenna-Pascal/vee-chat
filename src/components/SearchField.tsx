import React from 'react'

function SearchField() {
  return (
    <div className='relative mt-2 '>
    <input type="text" name="search"  className='w-full dark:bg-dark-primary1 h-[25px] shadow-md border-[#008069] rounded-sm focus:outline-none border-b-2 py-4 px-2 text-thin text-[14px] w-full' placeholder='search or start a new chat' />
    <i className="ri-search-line absolute right-2 top-[6px] text-[14px] text-gray-600 "></i>
    </div>
    )
}

export default SearchField