import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="bg-blue-400 p-5 ">
    <div className="flex justify-between">
      <h3 className="bg-red-600 py-1 px-3 rounded text-sm">{data.category}</h3>
      <h4>{data.date}</h4>
    </div>
    <h2 className="mt-5 text-lg font-semibold">{data.title}:</h2>
    <p className="text-xl font-semibold mt-2 text-black">{data.description}.</p>
    <div className=' mt-4  ' >
      <button className="bg-red-500 w-full hover:bg-green-600 text-white py-3 rounded-xl text-md transition duration-200" >failed </button>
      
    </div>
  </div>
  
  )
}

export default FailedTask