import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";



const MainLayOut = () => {
  return (
   <div className="font-serif">
    <div><Navbar /></div>
    <div className="min-h-[calc(100vh-232px)] container mx-auto ">
        <Outlet />
      </div>
   </div>
  );
};

export default MainLayOut;