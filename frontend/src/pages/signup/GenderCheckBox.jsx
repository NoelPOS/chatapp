import React, { useState } from 'react'

const GenderCheckbox = ({ handleGenderInput, selectedGender }) => {
  return (
    <div className='flex flex-col space-y-2'>
      <label className='block text-sm font-medium text-gray-300 mb-2'>
        Gender
      </label>
      <div className='flex space-x-4'>
        <label className='inline-flex items-center'>
          <input
            type='radio'
            className='form-radio text-blue-500 focus:ring-blue-400 focus:ring-opacity-50 border-gray-600 bg-gray-700'
            name='gender'
            value='male'
            checked={selectedGender === 'male'}
            onChange={() => handleGenderInput('male')}
          />
          <span className='ml-2 text-gray-300'>Male</span>
        </label>
        <label className='inline-flex items-center'>
          <input
            type='radio'
            className='form-radio text-blue-500 focus:ring-blue-400 focus:ring-opacity-50 border-gray-600 bg-gray-700'
            name='gender'
            value='female'
            checked={selectedGender === 'female'}
            onChange={() => handleGenderInput('female')}
          />
          <span className='ml-2 text-gray-300'>Female</span>
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox

// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//       <div className='form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className='label-text'>Male</span>
//           <input type='checkbox' className='checkbox border-slate-900' />
//         </label>
//       </div>
//       <div className='form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className='label-text'>Female</span>
//           <input type='checkbox' className='checkbox border-slate-900' />
//         </label>
//       </div>
//     </div>
//   )
// }
// export default GenderCheckbox
