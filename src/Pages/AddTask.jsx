import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("To-Do");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    const newTask = {
      title,
      description,
      category,
      timestamp: new Date().toISOString(),
    };
    
    onAddTask(newTask);
    setTitle("");
    setDescription("");
    setCategory("To-Do");
  };

  return (
    <div className="bg-[#FDFAF3] p-6 rounded-lg shadow-md min-h-screen mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="bg-[#FFEFBF] p-4 rounded-lg shadow">
        <label className="block mb-2 text-gray-700">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={50}
          required
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FDC808]"
        />
        
        <label className="block mt-4 mb-2 text-gray-700">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={200}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FDC808]"
        ></textarea>
        
        <label className="block mt-4 mb-2 text-gray-700">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#FDC808]"
        >
          <option value="To-Do">To-Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        
        <button
          type="submit"
          className="mt-4 w-full bg-[#FDC808] text-white font-semibold p-2 rounded hover:bg-yellow-500 transition"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;