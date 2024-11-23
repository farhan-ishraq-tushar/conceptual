import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dasboard from "../pages/Dasboard";
import Coffe from "../pages/Coffe";
import CoffeeCards from "../components/CoffeeCards";
import CoffeDetails from "../pages/CoffeDetails";

/* createBrowserRouter() function takes object inside and array of data-address(path) */
const routes = createBrowserRouter([
    {
    path: '/', // '/' indicates the root address
    element: <MainLayout/>, // <App/> component will be shown in root address
    children:[
        {
            path: '/',
            // index:  true,
            element: <Home></Home>,
            // loader: () is a callback function
            loader: ()=> fetch('../categories.json'),
            children:[
                {
                    path: '/',
                    element: <CoffeeCards></CoffeeCards>,
                    loader: ()=> fetch('../coffes.json')
                },
                {
                    path: '/category/:category',
                    element: <CoffeeCards></CoffeeCards>,
                    loader: ()=> fetch('../coffes.json')
                },
            ],
        },
        {
            path: '/coffes',
            element: <Coffe></Coffe>,
            loader: ()=> fetch('../coffes.json')
        },
        {
            path: '/dashboard',
            element: <Dasboard></Dasboard>
        },
        {
            path: '/coffee/:id',
            element: <CoffeDetails></CoffeDetails>,
            loader: ()=> fetch('../coffes.json')
        },
        
       
    ]
    },
  ])
  export default routes;