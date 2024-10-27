import React from 'react'

const TasklistNumbers = ({data}) => {
  return (
    <div className='flex screen mt-10 justify-between gap-5'>
        <div className='px-6 py-9 rounded-xl w-[45%] bg-red-400'>
            <h2 className='text-2xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className='px-6 py-9 rounded-xl w-[45%] bg-blue-400'>
            <h2 className='text-2xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>

        <div className='px-6 py-9 rounded-xl w-[45%] bg-green-400'>
            <h2 className='text-2xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>

        <div className='px-6 py-9 rounded-xl w-[45%] bg-yellow-400'>
            <h2 className='text-2xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>

        
    </div>
  )
}

export default TasklistNumbers