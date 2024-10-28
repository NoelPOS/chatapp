import React from 'react'
import useConversation from '../../zustand/useConversation'

const Conversation = ({ conversation, emoji, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  const isSelected = selectedConversation?._id === conversation._id

  return (
    <div
      className={`hover:bg-gray-700 transition duration-300 ease-in-out ${
        isSelected ? 'bg-gray-700' : ''
      }`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className='flex items-center gap-3 p-4 cursor-pointer'>
        <div className='relative'>
          <img
            src={conversation.profilePic}
            alt='user avatar'
            className='w-12 h-12 rounded-full'
          />
          <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800'></div>
        </div>
        <div className='flex-grow'>
          <h3 className='text-white font-semibold'>{conversation.fullname}</h3>
          <p className='text-gray-400 text-sm truncate'>
            Last message preview...
          </p>
        </div>
        <div className='flex flex-col items-end'>
          <span className='text-xs text-gray-500'>12:34 PM</span>
          <span className='bg-blue-500 text-white text-xs rounded-full px-2 py-1 mt-1'>
            {emoji}
          </span>
        </div>
      </div>
      <div className='border-b border-gray-700 mx-4'></div>
    </div>
  )
}

export default Conversation
