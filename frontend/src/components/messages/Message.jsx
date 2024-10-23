import React from 'react'

const Message = () => {
  return (
    <div className='flex flex-col items-end mb-4'>
      <div className='flex items-end'>
        <div className='order-2 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs'>
          <div className='inline-block rounded-lg rounded-br-none bg-blue-500 px-4 py-2 text-white'>
            Hello world
          </div>
        </div>
        <img
          src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
          alt='User avatar'
          className='h-6 w-6 rounded-full order-1'
        />
      </div>
      <span className='text-xs text-gray-500 leading-none mt-1'>12:00 PM</span>
    </div>
  )
}

export default Message
