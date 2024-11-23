import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { getAllFavorites } from '../../utils';
import Card from '../components/Card';

const Dasboard = () => {
    const [coffees, setCoffees] = useState([]);
    useEffect(()=>{
        const favorites = getAllFavorites()
        setCoffees(favorites)
    },[])
    return (
        <div>
           <Heading title={'Welcome to Dash Board'} subtitle={'Manage coffees that you have previously added as favorite. You can view or remove from here'}>
           </Heading>

           <div className='grid
            grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
            {/* Coffee Cards...{category} */}
            {coffees.map(coffee=> (
                <Card key={coffee.id} coffee={coffee}></Card>
            ))}
            </div>

        </div>
    );
};

export default Dasboard;