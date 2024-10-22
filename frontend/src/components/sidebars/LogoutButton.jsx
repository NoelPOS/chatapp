import { BiLogOut } from 'react-icons/bi'
import { useState } from 'react'
// import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {
  //   const { loading, logout } = useLogout()
  const [loading, setLoading] = useState(false)
  return (
    <div className='mt-auto'>
      {!loading ? (
        <BiLogOut
          className='w-6 h-6 text-white cursor-pointer'
          //   onClick={logout}
        />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}
export default LogoutButton