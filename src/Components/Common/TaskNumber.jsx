import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 mt-10 '>
    <div className='rounded-xl py-6 px-9 bg-red-600'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
    </div>
    <div className='rounded-xl py-6 px-9 bg-yellow-500'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
    </div>
    <div className='rounded-xl py-6 px-9 bg-green-500'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task </h3>
    </div>
    <div className='rounded-xl py-6 px-9 bg-blue-600'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
    </div>
</div>

  )
}

export default TaskNumber