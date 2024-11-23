import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../compnents/Navbar';

const About = () => {
    return (

        <div>

            <div className='flex flex-col gap-2'>
                <h1>This is about page</h1>

                <Link to="/" className='bg-green-400 p-1 rounded font-bold'>
                    Home
                </Link>

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

export default About;