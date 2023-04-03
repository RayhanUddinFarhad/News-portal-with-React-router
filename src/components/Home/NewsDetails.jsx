import React from 'react';
import { useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const data = useLoaderData ()
    console.log (data)



    return (
        <div className='my-5'>

            {


data.data.map ( (data) =>{

return (


    
    <div className='space-y-10'>

        <h3 className='text-3xl font-bold'>{data.title}</h3>
        <img src={data.image_url} alt="" />


        <p>{data.details}</p>



    </div>
)
}



)
            }
            
        </div>
    );
};

export default NewsDetails;