import React from 'react'
import MessageInput from './MessageInput'
import Messages from './Messages'

const MessageContainer = () => {
  return (
    // md:min-w-[450px]
    <div className='flex-1 flex flex-col h-[92vh]'>
      <>
        {/* Header */}
        <div className='bg-slate-500 px-4 py-2 mb-2'>
          <span className='label-text'>To:</span>{' '}
          <span className='text-gray-900 font-bold'>John doe</span>
        </div>

        <Messages />
        <MessageInput />
      </>
    </div>
  )
}
export default MessageContainer
