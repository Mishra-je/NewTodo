import React from 'react'
import Header from '../Common/Header'
import TaskNumber from '../Common/TaskNumber'
import TaskList from '../Common/TaskList'

const EmployeeDashboard = (props) => {
  console.log("data is ",props.data)
  return (
<div className='min-h-screen p-10 bg-[#1C1C1C] text-white flex  flex-col'>
    <Header changeUser={props.changeUser} data={props.data}  />
    <TaskNumber data={props.data}  />
    <TaskList data={props.data}/>
</div>

  )
}

export default EmployeeDashboard