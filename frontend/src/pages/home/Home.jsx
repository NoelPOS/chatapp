import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import useLogout from '../../hooks/useLogout.js'

const Home = () => {
  const { loading, logout } = useLogout()

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }
  return (
    <div className='h-screen flex flex-col bg-gradient-to-br from-gray-800 to-gray-900'>
      <div className='flex-none'>
        <div className='bg-gray-800 text-white shadow-md'>
          <div className='container mx-auto px-4'>
            <div className='flex items-center justify-between h-16'>
              <div className='flex items-center'>
                <button
                  className='lg:hidden mr-2 text-gray-300 hover:text-white focus:outline-none focus:text-white'
                  aria-label='Open sidebar'
                >
                  <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                    <path
                      d='M4 6h16M4 12h16M4 18h16'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
                <span className='font-bold text-xl'>Chat App</span>
              </div>
              <nav className='hidden lg:flex space-x-4'>
                <a
                  href='/'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Home
                </a>
                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-grow flex overflow-hidden'>
        <Sidebar />
        <main className='flex-grow bg-gray-700 overflow-hidden'>
          <MessageContainer />
        </main>
      </div>
    </div>
  )
}

export default Home
