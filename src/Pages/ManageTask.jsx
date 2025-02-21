import React, { useEffect, useState } from 'react';
import { IoTrashBin } from "react-icons/io5";
import { MdEditSquare } from "react-icons/md"; 

const ManageTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  return (
    <div className="overflow-x-auto p-4 text-black bg-[#FDFAF3] min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Manage Tasks</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 ">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">
            timestamp</th>
            <th className="border p-2">
            Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task,i) => (
            <tr key={task.id} className="hover:bg-[#FFF0C0]">
              <td className="border p-2">{i+1}</td>
              <td className="border p-2">{task.title}</td>
              <td className="border p-2">{task.description}</td>
              <td className="border  p-2">{task.category}</td>
              <td className="border p-2">{task.timestamp}</td>
              <td className="border p-2">
                <button className='btn bg-green-800 text-white rounded-full'><MdEditSquare /></button>
                <button className='btn mt-2 bg-red-700 text-white rounded-full'><IoTrashBin /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTask;
