import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Bannar from '../Bannar/Bannar';
import Services from '../Services/Services';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import About from '../About/About';

const Home = () => {
    const { servicesHome } = useLoaderData()

    return (
        <div className=' max-w-screen-xl mx-auto'>
            <Bannar></Bannar>
            <About></About>
            {/* <div>
                <div className="card w-96  bg-base-100 shadow-xl mt-20">
                    <figure>
                        <PhotoProvider>
                            <PhotoView src={servicesHome.image}>
                                <img className=' h-72 w-full' src={servicesHome.image} alt="Shoes" />
                            </PhotoView>
                        </PhotoProvider>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {servicesHome.name}
                        </h2>
                        <p>
                            {
                                servicesHome.details.length > 100 ?
                                    <>
                                        <p>{servicesHome.details.slice(0, 100) + '...'} </p>
                                        <Link to={`/services/${servicesHome._id}`}>
                                            <button className='btn btn-sm btn-outline btn-info mt-2'> View Details</button>
                                        </Link>
                                    </>
                                    :
                                    <p>{servicesHome.details}</p>
                            }
                        </p>
                        <div className="card-actions justify-end">

                            <p><span className='font-bold text-blue-600 '>Price:</span> {servicesHome.price}</p>
                            <p><span className='font-bold text-blue-600 ' >Rating:</span> {servicesHome.rating}</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <Services></Services>
        </div>
    );
};

export default Home;