import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Activelink from '../Home/Activelink';

const Navbar = () => {
    return (
        <div className='space-x-10'>

            <div className='lg:flex justify-around text-gray-300'>



                <Activelink className='text-gray-400' to="/">All News</Activelink>

                <Activelink className='text-gray-400' to="/breaking">Breaking News</Activelink>

                <Activelink className='text-gray-400' to="/regular">Regular News</Activelink>

                <Activelink className='text-gray-400' to="/international">International news</Activelink>
                <Activelink className='text-gray-400' to="/sports">Sports</Activelink>
                <Activelink className='text-gray-400' to="/entertainment">Entertainment</Activelink>
                <Activelink className='text-gray-400' to="/culture">Culture</Activelink>
                <Activelink className='text-gray-400' to="/arts">Arts</Activelink>
            </div>
            <Outlet></Outlet>

        </div>
    );
};

export default Navbar;