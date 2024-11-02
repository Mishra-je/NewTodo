import React from 'react'

const AcceptTask = ({data}) => {
  // console.log("The data from acceptTask ",data)
  return (
    <div className="bg-yellow-500 p-5">
  <div className="flex justify-between items-center">
    <h3 className="bg-red-600 text-white py-1 px-3 rounded text-sm">{data.category}</h3>
    <h4 className="text-gray-600">{data.date}</h4>
  </div>
  <h2 className="mt-4 text-xl font-semibold text-black ">{data.title}:</h2>
  <p className="text-xl font-semibold mt-2 text-black">
    {data.description}
  </p>
  <div className="flex flex-col mt-4 space-y-3">
    <button className="bg-green-500 w-full hover:bg-green-600 text-white py-3 rounded-xl text-md transition duration-200">
      Mark as Accepted
    </button>
    <button className="bg-red-500 w-full hover:bg-red-600 text-white py-3 rounded-xl text-md transition duration-200">
      Mark as Failed
    </button>
  </div>
</div>



  )
}

export default AcceptTask