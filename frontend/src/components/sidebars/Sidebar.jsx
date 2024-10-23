import React from 'react'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import SearchInput from './SearchInput'

const Sidebar = () => {
  return (
    <div className='w-80 bg-gray-800 border-r border-gray-700 flex flex-col h-full'>
      <div className='p-4'>
        <SearchInput />
      </div>
      <div className='flex-grow overflow-y-auto'>
        <Conversations />
      </div>
    </div>
  )
}

export default Sidebar
