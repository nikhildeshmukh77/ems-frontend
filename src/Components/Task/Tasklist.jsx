import React from 'react'

const Tasklist = () => {
  return (
    <div id='tasklist' className='h-[55%] flex overflow-x-auto items-center justify-start w-full gap-5 flex-nowrap py-10 mt-10'>
      <div className='flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-small px-3 py-1'>High</h3>
          <h4 className='text-base'>18 Jan 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Push Code on Github</h2>
        <p className='text-sm mt-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam nisi temporibus ullam non necessitatibus!</p>
      </div>
      <div className='flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-small px-3 py-1'>High</h3>
          <h4 className='text-base'>18 Jan 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Push Code on Github</h2>
        <p className='text-sm mt-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam nisi temporibus ullam non necessitatibus!</p>
      </div>
      <div className='flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-small px-3 py-1'>High</h3>
          <h4 className='text-base'>18 Jan 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Push Code on Github</h2>
        <p className='text-sm mt-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam nisi temporibus ullam non necessitatibus!</p>
      </div>
      <div className='flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-small px-3 py-1'>High</h3>
          <h4 className='text-base'>18 Jan 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Push Code on Github</h2>
        <p className='text-sm mt-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam nisi temporibus ullam non necessitatibus!</p>
      </div>
    </div>
  )
}

export default Tasklist