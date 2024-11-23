/* eslint-disable react/prop-types */
// import React from 'react';
   
import ShowDisplay from "./ShowDisplay";

const Display = (p) => {
    /*
    // Here 'p' will include all data (data={data} color="red" isTrue={false} number={10} arr={arr}) that sent in 
    <Display data={data} color="red" isTrue={false} number={10} arr={arr}>
    </Display> component. 

    -----JS understanding----
    Here 'Display' is a function (also a component is React) and 'p' is its parameter. No matter how much data, object, array, boolean or number is sent as data in the 'Display' component; using single parameter 'p' in the component function 'Display' will include all the data, object, array, boolean or number as an object. 
    */

    // console.log(data, arr, isTrue, number, color);
    /* 
    console.log(p)
    Output:
    {data: {…}, color: 'red', isTrue: false, number: 10, arr:[10,20]}
    */
     
    const {isTrue, number, color} = p;

    // if (isTrue){
    //     return <p>{number}</p>
    // }
    // return <p>{color}</p>

    return (
        <div>
            {
                isTrue ? <ShowDisplay clonedData={{...p}}></ShowDisplay>: "No Show Display"
            }

            {
                isTrue && <ShowDisplay clonedData={{...p}}></ShowDisplay>
            }

            <h1>This is the Display section</h1>
            {/* <div>{children}</div> */}
            <ShowDisplay clonedData={{...p}}></ShowDisplay>
            {/*
             "...p" will clone 'p' without wrapping with {}
            Adding "{}" will make object including all data 
            
            Here, p = clonedData:{
                data={data} color="red" isTrue={false} 
                number={10} arr={arr}
            }

            {...p} = 
            {
                clonedData:{
                    data={data} color="red" isTrue={false} 
                    number={10} arr={arr}
                }
            }
            
            */}

            {/* <div>{children}</div> */}
        </div>
    );
};

export default Display;