/* eslint-disable react/prop-types */
// import React from 'react';

import { createContext, useEffect, useState } from "react";

/*
    Context api three steps

    1. Context create
    2. Provide data
    3. Wrap component (in which component provider is used)

*/

//Step-1: Context create 
export const dataContext = createContext([]); 
/*  
    Here "[]" is the initial data of "createContext()"
    We mast export createContext() namely dataContext when creating it
*/

const DataProvider = ({children}) => {
    // Here, {children} is sent as props

    const [arr, setArr] = useState([10, 20, 30]);
    
    console.log(arr);
    

    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    },[])

    const sendData ={
         arr,
         data,
         setArr,
         setData
    };

    return (
        // Step-2: Provide data

        <dataContext.Provider value={sendData}>
            {/*
                 We must use same name as the name given
                to createContext() + .Provider as HTML Tag. In this case
                it is <dataContext> </dataContext> 
            */}
            {children} 
            {/* Now, value is accessible in the children */}
        </dataContext.Provider>

    );
};

export default DataProvider;