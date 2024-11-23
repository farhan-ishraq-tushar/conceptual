/* eslint-disable react/prop-types */
// import React from 'react';

const ShowDisplay = ({clonedData}) => {
    /* 
    console.log(q)
    Output: {clonedData: {data={data} color="red" isTrue={false} 
                number={10} arr={arr}}
                }
    
    */
//    const {data, color, arr} = q; 

    // console.log(clonedData)
    
    // const {clonedData} = q;
    const {arr, isTrue} = clonedData;

    return (
        <div>
            <h1 className="bg-violet-400">Length of the array is: {arr.length}</h1>
        </div>
    );
};

export default ShowDisplay;