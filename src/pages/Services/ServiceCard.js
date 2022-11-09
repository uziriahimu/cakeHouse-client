import React from 'react';

const ServiceCard = ({ service }) => {

    const { name, image, _id, rating, price, details } = service

    return (
        <div>
            <div className="card w-96  bg-base-100 shadow-xl">
                <figure><img className=' h-72 w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">

                        <p><span className='font-bold text-blue-600 '>Price:</span> {price}</p>
                        <p><span className='font-bold text-blue-600 ' >Rating:</span> {rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;