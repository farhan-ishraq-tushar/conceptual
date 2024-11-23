import React from 'react';
import { useActionData, useLocation } from 'react-router-dom';

const Navbar = () => {

    // const location = useLocation();
    // console.log(location.pathname) //Output: /about

    // ---- use of destructuring method
    const { pathname } = useLocation();
    console.log(pathname); //Output: /about


    return (
        <div className='flex gap-10 justify-between mb-8' >
            <h1 >Hello!</h1>

            <input className='border border-violet-500' type="search" name="" id="" />

            <div className='flex gap-8 list-none' >
                <li>
                    {pathname == "/about" ? "About" : "Item1"} 
                </li>
                <li>Item2</li>
                <li>Item3</li>
            </div>
        </div>
    );
};

export default Navbar;