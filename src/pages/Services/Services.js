import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Bannar from '../Bannar/Bannar';
import Info from '../Info/Info';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
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
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>

                    )
                }
            </div>
            <Info></Info>
        </div>
    );
};

export default Services;