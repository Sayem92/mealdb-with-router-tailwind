import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Meal from '../Meal/Meal';

const Home = () => {
    const mealsAll = useLoaderData().meals;
    // console.log(meals)
    return (
        <div>
            <Header></Header>
   
            <div className='grid grid-cols-1 mt-44 md:mt-34 md:grid-cols-2 lg:gap-40 gap-10 md:mx-20 mx-5 my-14'>
                        {
                            mealsAll.map(meal => <Meal
                                key={meal.idMeal}
                                meal={meal}
                            ></Meal>)
                        }
            </div>
        </div>
    );
};

export default Home;