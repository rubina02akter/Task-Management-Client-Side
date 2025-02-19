import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../Pages/Home";
import Dashboard from "../Dashboard/Dashboard";
import LogIn from "../Pages/LogIn";
import Profile from "../Pages/Profile";
import AddTask from "../Pages/AddTask";
import ManageTask from "../Pages/ManageTask";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,
    errorElement: '',
    children: [
      {
        path: '/',
        element: <Home />
      },

      {
        path: '/login',
        element: <LogIn />
      },

    ]
  },
  //dashboard
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children:[
      //admin routes
      {
       path: 'profile',
       element: <Profile />
      },
      {
       path: 'add-task',
       element: <AddTask />
      },
      {
       path: 'manage-task',
       element: <ManageTask />
      },
      
    
    ]
  }

])

export default router;