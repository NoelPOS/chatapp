import React, { useEffect } from 'react'
import MessageInput from './MessageInput'
import Messages from './Messages'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'
import { TiMessages } from 'react-icons/ti'

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className='flex flex-col h-full bg-gray-900'>
          <div className='bg-gray-800 text-white px-4 py-3 shadow-md'>
            <span className='text-gray-400'>To: </span>
            <span className='font-semibold'>
              {selectedConversation.fullname}
            </span>
          </div>

          <div className='flex-grow overflow-y-auto px-4 py-4'>
            <Messages />
          </div>
          <MessageInput />
        </div>
      )}
    </>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  const { authUser } = useAuthContext()
  const convertToObject = JSON.parse(authUser)
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {convertToObject.fullname} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}
