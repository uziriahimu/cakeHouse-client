import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AddReviews from "../pages/Reviews/AddReviews";
import Reviews from "../pages/Reviews/Reviews";
import Services from "../pages/Services/Services";
import SingleService from "../pages/Services/SingleService";

import SignUp from "../pages/SignUp/SignUp";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/services',
                element: <Services></Services>

            },
            {
                path: '/review',
                element: <Reviews></Reviews>

            },
            {
                path: '/addreview',
                element: <AddReviews></AddReviews>

            },
            {
                path: '/reviews/:id',
                element: <AddReviews></AddReviews>,
                loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)

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