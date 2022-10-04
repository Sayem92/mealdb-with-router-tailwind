
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
       <div className='bg-sky-300 fixed top-0 left-0 right-0'>
         <div className=' md:flex justify-between items-center px-2 md:px-7 py-6'>
           <div className='flex items-center text-3xl pb-3 text-white  md:text-4xl'>
            <img className='h-14 w-14  mr-2 rounded-lg ' src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="" />
                <h1 className='text-red-500'> Choose Eat Online Restaurant</h1>
           </div>

           <div className='text-xl md:text-4xl'>

                <NavLink to={'/home'} className='md:ml-16 pr-5 hover:bg-amber-300 rounded-lg'>Home</NavLink>
                <NavLink to={'/menu'} className='pr-5 hover:bg-amber-300 rounded-lg'>Menu</NavLink>
                <NavLink to={'/offers'} className='pr-5 hover:bg-amber-300 rounded-lg '>Offers</NavLink>
                <NavLink to={'/rewards'} className='pr-5 hover:bg-amber-300 rounded-lg'>Rewards</NavLink>

           </div>
        </div>
       </div>
    );
};

export default Header;