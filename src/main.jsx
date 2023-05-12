import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Home/Home/Home';
import LogIn from './Submission/Login/LogIn';
import Register from './Submission/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import Bookings from './Pages/Bookings/Bookings';
import BookingCard from './Pages/BookingCard/BookingCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      },
      {
        path: 'signup',
        element: <Register></Register>
      },
      {
        path: 'book',
        element: <Bookings></Bookings>
      },
      {
        path: 'bookings',
        element: <BookingCard></BookingCard>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <div className='max-w-7xl mx-auto'>
    <RouterProvider router={router} />
    </div>
   </AuthProvider>
  </React.StrictMode>,
)
