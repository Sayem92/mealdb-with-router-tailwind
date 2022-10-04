import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import MenuList from '../MenuList/MenuList';

const Menu = () => {
    const mealsAll = useLoaderData().meals;
    // console.log(mealsAll)
    return (
        <div>
            <Header></Header>
            <h1 className='mt-48 text-center text-4xl font-medium text-blue-600 md:mt-52 lg:mt-40'>All Menu is here</h1>
            <div className='grid grid-cols-1 mt-12 md:mt-34 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-10 md:mx-20 mx-5 my-14'>
                        {
                            mealsAll.map(meal => <MenuList
                                key={meal.idMeal}
                                meal={meal}
                            ></MenuList>)
                        }
            </div>
        </div>
    );
};

export default Menu;