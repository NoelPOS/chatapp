import React from 'react'

const Message = () => {
  return (
    <div className={`chat chat-end`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          {/* src={profilePic} */}
          <img
            alt='Tailwind CSS chat bubble component'
            src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
          />
        </div>
      </div>
      <div
        //   ${bubbleBgColor} ${shakeClass}
        className={`chat-bubble text-white pb-2`}
      >
        {/* {message.message} */}
        Hello world
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
        {/* {formattedTime} */}
        12:00 PM
      </div>
    </div>
  )
}

export default Message
