import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SingleService from "../pages/Services/SingleService";

import SignUp from "../pages/SignUp/SignUp";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/'),
                element: <Home></Home>

            },
            {
                path: '/services/:id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                },
                element: <SingleService></SingleService>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])