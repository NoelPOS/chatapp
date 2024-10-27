import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'

const Conversations = () => {
  const { loading, conversations } = useGetConversations()
  console.log(conversations)
  return (
    <div className='flex flex-col'>
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  )
}

export default Conversations
