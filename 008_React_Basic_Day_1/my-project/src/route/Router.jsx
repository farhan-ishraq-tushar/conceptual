
import Home from '../pages/home/Home';
import Main from '../compnents/Main';
import About from '../pages/about/About';
import App from '../App';
import { createBrowserRouter} from 'react-router-dom';
import { data } from 'autoprefixer';

// const router = createBrowserRouter(
//     [
//       // path for home page
//       {
//         path: "/",
//         // component in that path. We are selecting the page. 
//         element:<Main></Main>,
//         children: [
//           {
//             path: "/",
//             element:<Home></Home>,
//             children:[
//               {
//                 path:"/",
//                 element: <h1>Before clicking Button1 & Button2</h1>
//               },
//               {
//                 path:"btn1",
//                 element: <h1>Hi i am Button1</h1>
//               },
//               {
//                 path: "btn2",
//                 element: <h1>Hi i am button 2</h1>
//               }
//             ]
//           },
//           {
//             path: "/about",
//             element:<About></About>,
//             children:[
//               {
//                 path:"/about",
//                 element: <h1>Before clicking Button1 & Button2</h1>
//               },
//               {
//                 path:"/about/btn1",
//                 element: <h1>Hi i am Button1</h1>
//               },
//               {
//                 path: "/about/btn2",
//                 element: <h1>Hi i am button 2</h1>
//               }
//             ]
//           }
//         ]
//       },
  
//       // About Page
//       {
//         path: "/about",
//         element: <About></About>
//       },
  
//       // App page
//       {
//         path: "/app",
//         element:<App></App>
//       }
//     ]
//   )

// export default router;

// fetching Data
// async function fetchData(){
//     const res = await fetch ("/data.json");
//     const data = await res.json();
//     return data;
// }

const Router = createBrowserRouter(
    [
        // path for home page
        {
          path: "/",
          // component in that path. We are selecting the page. 
          element:<Main></Main>,
        //   loader: fetchData,
          loader: () => fetch("/data.json"),
          /* we can only fetch one set of data in one loader. 
          Multiple set of data can not be called*/ 
          children: [
            {
              path: "/",
              element:<Home></Home>,
              children:[
                {
                  path:"/",
                  element: <h1>Before clicking Button1 & Button2</h1>
                },
                {
                  path:"btn1",
                  element: <h1>Hi i am Button1</h1>
                },
                {
                  path: "btn2",
                  element: <h1>Hi i am button 2</h1>
                }
              ]
            },
            {
              path: "/about",
              element:<About></About>,
              children:[
                {
                  path:"/about",
                  element: <h1>Before clicking Button1 & Button2</h1>
                },
                {
                  path:"/about/btn1",
                  element: <h1>Hi i am Button1</h1>
                },
                {
                  path: "/about/btn2",
                  element: <h1>Hi i am button 2</h1>
                }
              ]
            }
          ]
        },
    
        // About Page
        {
          path: "/about",
          element: <About></About>
        },
    
        // App page
        {
          path: "/app",
          element:<App></App>
        }
      ]
)

export default Router;