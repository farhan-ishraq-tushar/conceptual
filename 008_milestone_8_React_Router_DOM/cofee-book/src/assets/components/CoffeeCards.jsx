// import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';
import { useEffect, useState } from 'react';

const CoffeeCards = () => {

    const navigate = useNavigate();

    const data = useLoaderData()
    const {category} = useParams()
    const [coffees, setCoffees] = useState([])
    useEffect(()=>{

        if(category){
            const filterByCategory = [...data].filter(coffee => coffee.category===category)
            setCoffees(filterByCategory)
        }else{
            setCoffees(data.slice(0,6))
        }

    
    
    },[category,data])
    console.log(data)
    return (
        <div>
            <div className='grid
            grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
            {/* Coffee Cards...{category} */}
            {coffees.map(coffee=> (
                <Card key={coffee.id} coffee={coffee}></Card>
            ))}
            </div>
            <button className='btn btn-warning' onClick={()=> navigate('/coffes')}>View All</button>
        </div>
        
    )
};

export default CoffeeCards;