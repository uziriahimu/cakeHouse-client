import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Bannar from '../Bannar/Bannar';
import Info from '../Info/Info';
import Services from '../Services/Services';
import HomeDetails from './HomeDetails';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://service-provider-server.vercel.app/home')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=' max-w-screen-xl mx-auto'>
            <Bannar></Bannar>
            <About></About>
            <div className='text-center mt-32'>
                <h1 className='text-2xl text-orange-400 italic'>please, do this</h1>

                <h1 className='text-2xl font-bold italic' >CAKE MY DAY</h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <HomeDetails
                        key={service._id}
                        service={service}
                    ></HomeDetails>

                    )
                }
            </div>
            <div className='text-center mt-20'>
                <Link to='/services'>  <button className='btn btn-primary'>See All</button></Link>
            </div>
            <Info></Info>
        </div>
    );
};

export default Home;