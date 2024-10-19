import React from 'react'

const Header = ({data}) => {
  console.log(data);
  return (
    <div className='flex items-end justify-between'>
        <h1 className='2xl font-semibold'>Hello <br/> <span className='text-3xl font-semibold'>{data.email}</span></h1>
         <button className='bg-red-500 text-white text-lg font-medium px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header