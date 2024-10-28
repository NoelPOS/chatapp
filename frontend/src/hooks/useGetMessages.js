import { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useGetMessages = () => {
  const { authUser } = useAuthContext()
  console.log(JSON.parse(authUser)._id)
  const { selectedConversation, messages, setMessages } = useConversation()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getmessages = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `http://localhost:5000/api/messages/${selectedConversation._id}`,

          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: {
              id: JSON.parse(authUser)._id,
            },
            mode: 'no-cors',
          }
        )
        const data = await res.json()
        if (data.error) {
          throw new Error(data.error)
        }

        setMessages(data)
      } catch (error) {
        console.error('Error in useGetMessages hook: ', error.message)
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    }

    if (selectedConversation._id) {
      getmessages()
    }
  }, [selectedConversation?._id, setMessages])

  return { loading, messages }
}

export default useGetMessages
