import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
// import Home from './pages/home/Home.jsx'
// import About from './pages/about/About.jsx'
// import Main from './compnents/Main.jsx'
import Router from './route/Router.jsx'
import DataProvider from './provider/DataProvider.jsx'

// First step of creating router
/*
  We do it by using the function 'createBrowserRouter()' function.
  This function holds objects inside an array (array of objects). 
  Each page is represented by each of the object. 
*/
// const router = createBrowserRouter(
//   [
//     // path for home page
//     {
//       path: "/",
//       // component in that path. We are selecting the page. 
//       element:<Main></Main>,
//       children: [
//         {
//           path: "/",
//           element:<Home></Home>,
//           children:[
//             {
//               path:"/",
//               element: <h1>Before clicking Button1 & Button2</h1>
//             },
//             {
//               path:"btn1",
//               element: <h1>Hi i am Button1</h1>
//             },
//             {
//               path: "btn2",
//               element: <h1>Hi i am button 2</h1>
//             }
//           ]
//         },
//         {
//           path: "/about",
//           element:<About></About>,
//           children:[
//             {
//               path:"/about",
//               element: <h1>Before clicking Button1 & Button2</h1>
//             },
//             {
//               path:"/about/btn1",
//               element: <h1>Hi i am Button1</h1>
//             },
//             {
//               path: "/about/btn2",
//               element: <h1>Hi i am button 2</h1>
//             }
//           ]
//         }
//       ]
//     },

//     // About Page
//     {
//       path: "/about",
//       element: <About></About>
//     },

//     // App page
//     {
//       path: "/app",
//       element:<App></App>
//     }
//   ]
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* Step-3: Wrapping component. <App/> contains all other components.
    So, we wrapped <App/> so that we can access data from every other 
    components. */}
    <DataProvider>
      <RouterProvider router={Router}>{/* 2nd step: Wrapping component with "<RouterProvider/>" */}
        {/* Here "router" inside the {} is the variable name of the function 
        createBrowserRouter()
        */}
          <App />
      </RouterProvider>
    </DataProvider>


  </StrictMode>,
)
