import React from 'react'

const FailedTask = () => {
  return (
    <div className='flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-small px-3 py-1'>High</h3>
          <h4 className='text-base'>18 Jan 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Push Code on Github</h2>
        <p className='text-sm mt-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam nisi temporibus ullam non necessitatibus!</p>
        <div className='mt-4'>
            <button className='w-full'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask