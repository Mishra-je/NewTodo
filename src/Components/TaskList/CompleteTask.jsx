import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="bg-emerald-500 p-5 mt-5">
    <div className="flex justify-between">
      <h3 className="bg-yellow-500 py-1 px-3 rounded text-sm">{data.category}</h3>
      <h4>{data.date}</h4>
    </div>
    <h2 className="mt-5 text-lg font-semibold">{data.title}:</h2>
    <p className="text-sm mt-2 text-black font-semibold">{data.description}.</p>
    <div className='mt-2' >
        <button className="bg-yellow-500 w-full hover:bg-yellow-600 text-white py-3 rounded-xl text-md transition duration-200" > Completed</button>
    </div>
  </div>

  )
}

export default CompleteTask