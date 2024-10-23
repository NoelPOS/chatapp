import React from 'react'
import { BsSend } from 'react-icons/bs'

const MessageInput = () => {
  return (
    <form className='mt-auto px-4 my-3 flex items-center justify-center bg-gray-200'>
      <div className='w-[50%] flex items-center '>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
          placeholder='Send a message'
        />
        <button
          type='submit'
          className='flex items-center bg-gray-400 p-3 border rounded-xl'
        >
          <BsSend />
        </button>
      </div>
    </form>
  )
}
export default MessageInput
