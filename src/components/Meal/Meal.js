import React from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    // console.log(props.meal)
    const {idMeal, strMeal, strMealThumb} = props.meal;
    return (
        <div className='border-2 border-yellow-500 p-5 rounded-lg'>

            <img className='rounded-lg' src={strMealThumb} alt="" />
            <h1 className='text-2xl font-medium mt-5'>Name: {strMeal}</h1>
            <div>
            <Link to={`/home/${idMeal}`}><button  className='bg-green-500 py-4 px-14 lg:px-14 text-xl text-white rounded-lg mt-8'>Show Details</button></Link>
            <Link to={`/home/orders/${idMeal}`}><button  className='bg-sky-500 py-4 px-16 lg:px-14 text-xl lg:ml-2 text-white rounded-lg mt-8'>Add Orders</button></Link>
            </div>

        </div>
    );
};

export default Meal;