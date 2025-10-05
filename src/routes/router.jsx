import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import ServicesSection from "../components/ServicesSection";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import Whitelabel from "../pages/Whitelabel";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout/>,
        children:[
            {
                index:true,
                element:<Home/>,

            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/contact',
                element:<Contact/>,

            },
            {
                path:'/services',
                element:<ServicesSection></ServicesSection>,
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/white-label',
                element:<Whitelabel></Whitelabel>
            }

        ]
    },


]);
export default router;