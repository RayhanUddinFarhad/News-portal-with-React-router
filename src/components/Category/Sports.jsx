import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Newslist from '../Home/Newslist';

const Sports = () => {
    const data = useLoaderData ()
    return (
        <div>

        <div className='w-9/12 bg-[#EEEFFF] px-5 py-2 my-5 text-[#5D5FEF]'>

            <h3>{data.data.length} found for category Sports</h3>



        </div>



       {

        data.data.map ( (data) =>  <Newslist data = {data}></Newslist>)



       }
    </div>
    );
};

export default Sports;