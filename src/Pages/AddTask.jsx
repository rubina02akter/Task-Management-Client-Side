import { useState } from "react";
import Swal from "sweetalert2";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("To-Do");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      title,
      description,
      category,
      timestamp: new Date().toISOString(),
    };

    setIsLoading(true); // Start loading

    // Send data to the server
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false); // Stop loading
        
          Swal.fire({
            title: "Success!",
            text: "Task added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
          // Now, this is only called after the task is successfully added
          setTitle("");
          setDescription("");
          setCategory("To-Do");
        
      })
      .catch((error) => {
        setIsLoading(false); // Stop loading
        console.error("Error adding task:", error);
        Swal.fire({
          title: "Error",
          text: "There was an error adding the task.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
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
          disabled={isLoading}
          className="mt-4 w-full bg-[#FDC808] text-white font-semibold p-2 rounded hover:bg-yellow-500 transition"
        >
          {isLoading ? "Adding..." : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default AddTask;
