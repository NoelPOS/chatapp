import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <div className='relative flex-grow'>
        <input
          type='text'
          placeholder='Search…'
          className='w-full bg-gray-700 text-white border border-gray-600 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button
          type='submit'
          className='absolute right-1 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <IoSearchSharp className='w-5 h-5' />
        </button>
      </div>
    </form>
  )
}

export default SearchInput
