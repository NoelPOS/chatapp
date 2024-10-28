import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import { getRandomEmoji } from '../../../../backend/utils/emojis'

const Conversations = () => {
  const { loading, conversations } = useGetConversations()

  return (
    <div className='flex flex-col'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIndex={idx === conversations.length - 1}
          />
        ))
      )}
      {loading ? (
        <span className='loading loading-spinner mx-auto'></span>
      ) : null}
    </div>
  )
}

export default Conversations
