import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckBox'
import useSignup from '../../hooks/useSignUp'

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmpassword: '',
    gender: '',
  })

  const handleGenderInput = (gender) => {
    setInputs({ ...inputs, gender: gender })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(inputs)
    await signup(inputs)
  }
  const { loading, signup } = useSignup()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-4'>
      <div className='w-full max-w-md p-8 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg'>
        <h1 className='text-4xl font-bold text-center text-white mb-8'>
          Sign Up <span className='text-blue-400'>ChatApp</span>
        </h1>

        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label
              className='block text-sm font-medium text-gray-300 mb-2'
              htmlFor='fullName'
            >
              Full Name
            </label>
            <input
              id='fullName'
              type='text'
              placeholder='John Doe'
              className='w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200'
              onChange={(e) => {
                setInputs({ ...inputs, fullname: e.target.value })
              }}
            />
          </div>

          <div>
            <label
              className='block text-sm font-medium text-gray-300 mb-2'
              htmlFor='username'
            >
              Username
            </label>
            <input
              id='username'
              type='text'
              placeholder='johndoe'
              className='w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200'
              onChange={(e) => {
                setInputs({ ...inputs, username: e.target.value })
              }}
            />
          </div>

          <div>
            <label
              className='block text-sm font-medium text-gray-300 mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <div className='relative'>
              <input
                id='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter Password'
                className='w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200'
                onChange={(e) => {
                  setInputs({ ...inputs, password: e.target.value })
                }}
              />
              <button
                type='button'
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                    <path
                      fillRule='evenodd'
                      d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z'
                      clipRule='evenodd'
                    />
                    <path d='M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z' />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div>
            <label
              className='block text-sm font-medium text-gray-300 mb-2'
              htmlFor='confirmPassword'
            >
              Confirm Password
            </label>
            <div className='relative'>
              <input
                id='confirmPassword'
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='Confirm Password'
                className='w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200'
                onChange={(e) => {
                  setInputs({ ...inputs, confirmpassword: e.target.value })
                }}
              />
              <button
                type='button'
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none'
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                    <path
                      fillRule='evenodd'
                      d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z'
                      clipRule='evenodd'
                    />
                    <path d='M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z' />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* <GenderCheckbox
            handleGenderInput={handleGenderInput}
            selectedGender={inputs.gender}
          /> */}
          <GenderCheckbox
            onCheckboxChange={handleGenderInput}
            selectedGender={inputs.gender}
          />

          <a
            href='/login'
            className='text-sm text-blue-400 hover:underline hover:text-blue-300 transition duration-200 inline-block'
          >
            Already have an account?
          </a>

          <div>
            <button
              className='w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200'
              type='submit'
            >
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                'Sign Up'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
