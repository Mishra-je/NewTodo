import React, { useContext } from "react";
import { Authcontext } from "../../Context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(Authcontext);
  // console.log("Authdata is", userData);

  return (
    //first {/* <div className='flex flex-col mb-5  gap-2 overflow-auto h-[80%] '>
    // {authData.employee.map((item) => {
    //     return <div className='bg-red-400 py-2 px-4 flex justify-between rounded'>
    //         <h2 className='text-white'>{item.firstName}</h2>
    //         <h3 className='text-white'>Make a UI Design</h3>
    //         <h5 className='text-white px-10 py-2 rounded-md bg-green-500 '>Completed</h5>
    //         <h5 className='text-white bg-red-500 rounded-md px-10 py-2'>Failed</h5>
    //         <h5 className=' bg-yellow-500 text-black rounded-md  px-10 py-2'>Active</h5>
    //     </div>

    // })}
    // </div> */}

    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-auto sm:h-80">
      <div className="flex flex-col mb-5 gap-2">
        <div className="bg-emerald-600 py-2 px-4  flex-wrap sm:flex-nowrap items-center rounded-xl flex justify-between">
          <h2 className="text-white text-sm sm:text-base">Employee Name</h2>
          <h3 className="text-white text-sm sm:text-base">New Task </h3>
          <div className="flex justify-between mr-5">
          <h5 className="text-white text-sm sm:text-base mr-7 ">Completed</h5>
          <h5 className="text-white text-sm sm:text-base mr-7">Failed</h5>
          <h5 className="text-white text-sm sm:text-base mr-5">Active Task</h5>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 overflow-auto h-auto sm:h-[80%]">
        {userData.map((item) => (
          <div
            key={item.id}
            className="bg-red-400 py-2 px-4 flex flex-wrap sm:flex-nowrap justify-between items-center rounded"
          >
            <h2 className="text-white text-sm sm:text-base">
              {item.firstName}
            </h2>
            <h3 className=" bg-blue-500 text-white rounded-md px-4 py-1 text-xs sm:text-sm md:px-10 md:py-2">
             {item.taskCounts.newTask}
            </h3>

            <div className="flex gap-2 mt-2 sm:mt-0">
              <h5 className="text-white px-4 py-1 rounded-md bg-green-500 text-xs sm:text-sm md:px-10 md:py-2">
                {item.taskCounts.completed}
              </h5>
              <h5 className="text-white bg-red-500 rounded-md px-4 py-1 text-xs sm:text-sm md:px-10 md:py-2">
                {item.taskCounts.failed}
              </h5>
              <h5 className="bg-yellow-500 text-black rounded-md px-4 py-1 text-xs sm:text-sm md:px-10 md:py-2">
                {item.taskCounts.active}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
