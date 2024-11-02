import React from "react";
import AcceptTask from "../TaskList/AcceptTask";
import NewTask from "../TaskList/NewTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";

const TaskList = ({ data }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-5 bg-cyan-700 mt-5">
    {data.tasks.map((item, index) => (
      <div key={index} className="flex-shrink-0">
        {item.active && <AcceptTask data={item} />}
        {item.newTask && <NewTask data={item} />}
        {item.completed && <CompleteTask data={item} />}
        {item.failed && <FailedTask data={item} />}
      </div>
    ))}
  </div>
  
  
  
  
  
  

  );
};

export default TaskList;
