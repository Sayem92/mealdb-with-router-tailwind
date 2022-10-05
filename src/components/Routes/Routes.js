import { createBrowserRouter, useParams } from "react-router-dom";
import Cover from "../Cover/Cover";
import Details from "../Details/Details";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import Offers from "../Offers/Offers";
import Orders from "../Rewards/Orders/Orders";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Cover></Cover>
    },
    {
        path: '/home',
        loader: async () =>{
        return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        },
        element: <Home></Home>
    },
    {
        path:'/home/:id',
        loader: async ({params})=>{
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)    
        },
        element: <Details></Details>
    },
    {
        path: '/menu',
        loader: async () =>{
            return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        },
        element: <Menu></Menu> 
    },
    {
        path: '/offers', 
        element: <Offers></Offers>
    },
    {
        path:'/home/orders/:id',
        loader: async ({params})=>{
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)    
        },
         element: <Orders></Orders>
    },
    // {
    //     path: '/orders',
    //     element: <Orders></Orders>
    // }
])