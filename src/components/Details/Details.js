import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const Details = () => {
    const details = useLoaderData().meals[0];
    const { strMeal, strMealThumb, strInstructions
    } = details;
    // console.log(details);
    return (
        <div>
            <Header></Header>
                <div className='mt-40 lg:mx-14 mb-10 mx-3'>
                    <h1 className='text-4xl font-medium text-center mb-8'>Details of Meal</h1>
                    <img className='w-96 rounded-lg' src={strMealThumb} alt="" />
                    <h1 className='text-3xl font-medium  my-8'>Name: {strMeal}</h1>
                    <p>{strInstructions}</p>
                </div>
        </div>
    );
};

export default Details;