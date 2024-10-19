import React from 'react'

const TasklistNumbers = () => {
  return (
    <div className='flex screen mt-10 justify-between gap-5'>
        <div className='px-6 py-9 rounded-xl w-[45%] bg-red-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='px-6 py-9 rounded-xl w-[45%] bg-blue-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='px-6 py-9 rounded-xl w-[45%] bg-green-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='px-6 py-9 rounded-xl w-[45%] bg-yellow-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        
    </div>
  )
}

export default TasklistNumbers