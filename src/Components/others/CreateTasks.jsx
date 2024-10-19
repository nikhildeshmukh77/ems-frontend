import React from 'react'

const CreateTasks = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form className='flex w-full flex-wrap items-start justify-between'>
        <div className='w-1/2 flex flex-col gap-6'>
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Make a UI design' />
        </div>
        <div>
            <h3 lassName='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="date" />
        </div>
        <div>
            <h3 lassName='text-sm text-gray-300 mb-0.5'>Assign To</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Employe Name' />
        </div>
        <div>
            <h3 lassName='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='design,dev etc' />
        </div>
        </div>
        <div className='w-2/5 flex flex-col items-start'>
            <h3 lassName='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]' name="" id=" " cols="30" rows="10"></textarea>
        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>
        
    </form>

</div>
  )
}

export default CreateTasks