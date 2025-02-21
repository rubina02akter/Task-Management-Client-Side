import { FaBars, FaCircle, FaHome, FaList, FaUsers, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";


const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  

  return (
    <div className="flex flex-col lg:flex-row ">
      {/* Sidebar for large screens */}
      <div className="w-64 min-h-screen text-white bg-[#3C7160] py-12 hidden lg:block">
        <ul className="menu p-4">
     
    
     
          <li>
            <NavLink to="/dashboard/profile">
              <FaHome /> Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-task">
              <IoIosAddCircle /> Add Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-task">
              <FaList /> Manage Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/allUsers">
              <FaUsers /> All Users
            </NavLink>
          </li>
          <div className="divider">
            <FaCircle />
          </div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
         
         
        </ul>
     
      </div>

      {/* Dropdown for small and medium screens */}
      <div className="lg:hidden w-full text-black bg-[#FDFAF3] py-4 px-6">
        <button className="flex items-center gap-2 text-black" onClick={toggleDropdown}>
          <FaBars className="text-lg" /> Menu
        </button>
        {isDropdownOpen && (
          <ul className="menu p-4 text-black bg-[#FDFAF3]">
            <li>
              <NavLink to="/dashboard/profile">
                <FaHome /> Profile
              </NavLink>
            </li>
            <li>
            <NavLink to="/dashboard/add-task">
              <IoIosAddCircle /> Add Task
            </NavLink>
          </li>
            <li>
              <NavLink to="/manageCamp">
                <FaList /> Manage Task
              </NavLink>
            </li>
            <li>
              <NavLink to="/allUsers">
                <FaUsers /> All Users
              </NavLink>
            </li>
            <div className="divider">
              <FaCircle />
            </div>
            <li>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>
            </li>
          
           
          </ul>
        )}
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
