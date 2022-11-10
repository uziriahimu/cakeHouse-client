import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleService = () => {
    const singleservice = useLoaderData()
    return (
        <div>
            <div className="card w-1/2 mx-auto  bg-base-100 shadow-xl mt-20">
                <figure>

                    <img className=' w-full' src={singleservice.image} alt="Shoes" />

                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {singleservice.name}
                    </h2>
                    <p>
                        {
                            singleservice.details
                        }
                    </p>
                    <div className="card-actions justify-end">

                        <p><span className='font-bold text-blue-600 '>Price:</span> {singleservice.price}</p>
                        <p><span className='font-bold text-blue-600 ' >Rating:</span> {singleservice.rating}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleService;