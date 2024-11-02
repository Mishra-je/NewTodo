import React, { useContext, useState } from "react";
import NewTask from "../TaskList/NewTask";
import Login from "../Auth/Login";
import { Authcontext } from "../../Context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescriptioni, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAssign, setTaskAssign] = useState("");
  const [Category, setCategory] = useState("");
  const [Task, SetTask] = useState({});
  const [userData,setUserData] = useContext(Authcontext);
  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescriptioni,
      taskDate,
      Category,
      active: false,
      NewTask: true,
      failed: false,
      completed: false,
    };

    SetTask(newTask);

    const data = userData;
    data.forEach((element) => {
      if (taskAssign === element.firstName) {
        element.tasks.push(newTask);
        element.taskCounts.newTask += 1;
      }
    });
    setUserData(data)
    console.log("datum are",data)
    localStorage.setItem('employees',JSON.stringify(data))

    // console.log("Task data is ",Task)
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setTaskAssign("");
    setCategory("");
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-8 mt-5">
      <form className="flex flex-col gap-6" onSubmit={(e) => submitHandler(e)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-white mb-1 block" htmlFor="taskTitle">
              Task Title
            </label>
            <input
              type="text"
              id="taskTitle"
              onChange={(e) => setTaskTitle(e.target.value)}
              value={taskTitle}
              placeholder="Make a UI design"
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="text-white mb-1 block" htmlFor="taskDate">
              Date
            </label>
            <input
              type="date"
              id="taskDate"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="text-white mb-1 block" htmlFor="assignedTo">
              Assign to
            </label>
            <input
              type="text"
              id="assignedTo"
              value={taskAssign}
              onChange={(e) => setTaskAssign(e.target.value)}
              placeholder="Employee Name"
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="text-white mb-1 block" htmlFor="category">
              Category
            </label>
            <input
              type="text"
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              placeholder="Design, Dev, etc."
              className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        <div>
          <label className="text-white mb-1 block" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            cols="30"
            rows="5"
            value={taskDescriptioni}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-emerald-600 text-white font-bold py-2 px-4 rounded hover:bg-emerald-700 transition duration-300"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
