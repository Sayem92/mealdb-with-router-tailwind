import React from 'react';
import { Link } from 'react-router-dom';

const MenuList = (props) => {
    const {idMeal, strMeal, strMealThumb} = props.meal;
    return (
        <div className='border-2 border-yellow-500 p-5 rounded-lg'>

            <img className='rounded-lg' src={strMealThumb} alt="" />
            <h1 className='text-2xl font-medium mt-5'>Name: {strMeal}</h1>
            <Link to={`/home/${idMeal}`}><button  className='bg-green-500 py-4 lg:px-44 px-14 lg:px-14 text-xl text-white rounded-lg mt-8'>Show Details</button></Link>

        </div>
    );
};

export default MenuList;