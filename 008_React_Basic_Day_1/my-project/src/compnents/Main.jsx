import React from 'react';
import Navbar from './Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';

const Main = () => {

    // calling loader
    const loader = useLoaderData();
    console.log(loader)

    return (
        <div>
            <Navbar></Navbar>

            <Outlet>
                {/* all children components will sit here. In 
                this case <Home/> is the children component. */}
            </Outlet>
        </div>
    );
};

export default Main;