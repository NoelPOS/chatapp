import React from 'react'
import MessageInput from './MessageInput'
import Messages from './Messages'

const MessageContainer = () => {
  return (
    <div className='flex flex-col h-full bg-gray-900'>
      <div className='bg-gray-800 text-white px-4 py-3 shadow-md'>
        <span className='text-gray-400'>To: </span>
        <span className='font-semibold'>John Doe</span>
      </div>

      <div className='flex-grow overflow-y-auto px-4 py-4'>
        <Messages />
      </div>

      <MessageInput />
    </div>
  )
}

export default MessageContainer
