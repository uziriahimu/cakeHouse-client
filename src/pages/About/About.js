import React from 'react';

const About = () => {
    return (
        <div>
            <div className='text-center mt-32'>
                <h1 className='text-2xl text-orange-400 italic'>take this seriously</h1>

                <h1 className='text-2xl font-bold italic' >EAT WHAT YOU LOVE</h1>
            </div>
            <div className=' mt-20  flex '>
                <div className='w-1/2'>
                    <img src="https://media.istockphoto.com/id/1147348761/photo/woman-hands-sieving-flour.jpg?b=1&s=170667a&w=0&k=20&c=hIuUYHIWrXBl9HFNxsJs7SCSC9oRjo_4kHx9Ga6GZbo=" alt="" />
                </div>

                <div className='w-1/2 flex justify-center items-center'>

                    <div>
                        <h1 className='text-3xl text-orange-700 font-bold mb-10'>About Me</h1>
                        <p>Bakeries bring joy and convenience to their communities, but the customers aren’t the only ones who will benefit from this small business. The owner has a lot to gain too. Imagine calling a kitchen filled with tasty treats your office. Starting a bakery will be hard work, but fun at the same time. With equal parts passion and elbow grease, you can start a business that has customers lined up around the block waiting for a chance to try your delicious treats. This guide on how to start a bakery will help you figure out how to get your business off the ground</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;