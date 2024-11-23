import React, { useContext, useState } from 'react';
import { Link, Navigate, NavLink, Outlet, useLocation, useNavigate} from 'react-router-dom';
import { dataContext } from '../../provider/DataProvider';

/*
    Ways to navigate between different routes
    1. <Link/> -links one page to another
    2. <NavLink/> -links and check active route
    3. <Navigate/> -link and check dependency based on condition (true or false)
    4. <useNavigate/>

    When we use something conditionally in JSX we use <Navigate/> and when we check a function we use useNavigate()
*/


// const navigation = useNavigate();

// const handleClick = () => {
    //     if(user){
        //         navigation("/about")
        //     }
        // }
        
        
        
        const Home = () => {
        const user = false;

            // Accessing data form children components using useContext()
            /*
            
            
            */
           
        // const data = useContext(dataContext);
        const {  arr, data, setData, setArr} = useContext(dataContext);


        // const [state, updateState] = useState(arr)
        const [count, newCount] = useState([1,2,3])
        // console.log(arr, data); 

        const handleClick1 = () =>{
            const copyArr = [...arr];
            copyArr.push(10);
            setArr(copyArr);
        };

        const handleClick2 = ()=>{
            const copyCount = [...count];
           copyCount.push("a")
           newCount(copyCount)
           console.log(copyCount)
        }


    const location = useLocation();
    console.log(location)

    // const navigate = useNavigate();
    //  const handleClick = () => {
    //     if(user){
    //         navigate("/about")
    //     }
    // }

    // const arr = [1,2,3,5]

    return (
        <div>
            {/* <h1>{arr}</h1> */}
            <h1>{arr.length}</h1>

        <button  onClick={handleClick1}>Click</button> <br />
        <h1>{count}</h1>
        <button  onClick={handleClick2}>Click</button>
            <div className='flex flex-col gap-2'>


                {/* Ways to link one page to another without refreshing it  */}
                <Link to="/about" className='border border-green-500 p-1'>
                    Go to About Using Link
                </Link>

                {/* "<NavLink/> can check weather a route is active or not at the same time offer all functionality of <Link/>" */}
                <NavLink to="/about" className='border border-red-500 p-1'>
                    Go to About Using NavLink
                </NavLink>

                
                {
                    user&&<Navigate to="/about">About</Navigate>
                    // We can't use "OnClick" here. Because, <Navigate/> automatically route based on condition. 

                }

                {
                    <Link to="/app" state={arr} className="bg-violet-400 p-1">App</Link>
                }


                <h1>This is home page</h1>


                <div className='flex justify-around'>

                    <button className='border border-red-500 p-1
                     rounded bg-yellow-400'>
                        <Link to="btn1"> Button1</Link>
                    </button>

                    <button  className='border border-red-500 p-1
                     rounded bg-green-400'>
                       <Link to="btn2"> Button2</Link>
                    </button>
                </div>

                    <Outlet></Outlet>

            </div>

        </div>

    );
};

export default Home;