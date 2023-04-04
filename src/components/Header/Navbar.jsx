import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Activelink from '../Home/Activelink';

const Navbar = () => {

    const [open, setOpen] = useState (false)
    return (
        <div>

            <div onClick={() => setOpen (!open)} className='md:hidden'>

                { open ?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>







                }



            </div>




            

<div className='lg:space-x-10 '>

<div className= {`lg:flex justify-around text-gray-300 space-y-5 lg:space-y-0 duration-500   ${open ? 'block p-3 bg-white max-w-max card-bordered lg:w-full' : 'hidden'}`}>



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
        </div>
    );
};

export default Navbar;