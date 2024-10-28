import React from 'react'
import Message from './Message'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import useGetMessages from '../../hooks/useGetMessages'

const Messages = () => {
  const { loading, messages } = useGetMessages()
  return (
    <div className='px-20 flex-1 overflow-auto'>
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className='text-center text-white'>
          Send a message to start the conversation
        </p>
      )}
    </div>
  )
}
export default Messages
