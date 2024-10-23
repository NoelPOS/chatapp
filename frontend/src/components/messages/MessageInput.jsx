import React from 'react'
import { BsSend } from 'react-icons/bs'

const MessageInput = () => {
  return (
    <form className='bg-gray-800 border-t border-gray-700 px-4 py-3'>
      <div className='max-w-4xl mx-auto flex items-center'>
        <input
          type='text'
          className='flex-grow bg-gray-700 text-white border border-gray-600 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Type a message...'
        />
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg px-4 py-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <BsSend className='w-5 h-5' />
        </button>
      </div>
    </form>
  )
}

export default MessageInput
