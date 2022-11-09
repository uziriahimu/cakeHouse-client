import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Bannar from '../Bannar/Bannar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className=' max-w-screen-xl mx-auto'>
            <Bannar></Bannar>
            <Services></Services>
        </div>
    );
};

export default Home;