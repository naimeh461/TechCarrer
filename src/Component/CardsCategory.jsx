import React, { useEffect, useState } from 'react';
import CardCategory from './CardCategory';
import { useLoaderData } from 'react-router-dom';
const CardsCategory = () => {
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        fetch("jobCategories.json")
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])
   
    return (
        <div>
            <div className='w-8/12 lg:flex m-auto justify-between mt-16 '>
                
                {
                    carts.map(category => <CardCategory
                    key = {category.id}
                    category = {category}
                    ></CardCategory>)
                }
            </div>
        </div>
    );
};

export default CardsCategory;