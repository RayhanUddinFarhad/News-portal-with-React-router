import React from 'react';
import { Link } from 'react-router-dom';

const Newslist = (props) => {

    const data = props.data;
    console.log(data.image_url);



    return (
        <div className='my-5'>

<div className="card lg:card-side bg-base-100 shadow-xl h-full w-80 lg:w-full">
            <figure><img className='w-96' src={data.image_url} alt="Album" /></figure>
            <div className="card-body space-y-5">
                <h2 className="card-title  w-full">{data.title}</h2>
                <p>{data.details.slice(0, 150)}</p>
                <div className="card-actions ">


                    <div className='lg:flex items-center  justify-between w-full space-y-5 lg:space-y-0'>

                        <div className='lg:flex space-x-5 space-y-5 lg:space-y-0  '>

                            <img className='w-11 rounded-xl' src={data.author.img} alt="" />

                            <div>

                                <p>{data.author.name}</p>
                                <p>{data.author.published_date}</p>
                            </div>



                        </div>


                        <div className='lg:flex'>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p>1.5M</p>



                        </div>


                        <div>

                           <Link to= {`/detail/${data._id}`}>

                           <button className=' bg-[#EEEFFF]  text-[#5D5FEF] '>Show Details

                           
                           
                           
                           </button>
                           
                           
                           </Link>

                        </div>


                    </div>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Newslist;