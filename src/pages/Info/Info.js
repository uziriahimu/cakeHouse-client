import React from 'react';

const Info = () => {
    return (
        <div>
            <div className='text-center mt-32 mb-10'>
                <h1 className='text-2xl text-orange-400 italic'>We have more option</h1>

                <h1 className='text-2xl font-bold italic' >CAKE LOVERS</h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>

                <div className=' flex flex-col items-center justify-center '>
                    <img className='h-1/2 w-1/2 rounded-full' src={'https://images.unsplash.com/photo-1624715136693-c06de266b622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZSUyMG1ha2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'} alt="" />
                    <h1 className='mt-5'>MACARONS</h1>
                </div>

                <div className=' flex flex-col items-center justify-center '>
                    <img className='h-1/2 w-1/2 rounded-full' src={'https://media.istockphoto.com/id/912295362/photo/golden-milk-turmeric-latte-golden-latte.jpg?b=1&s=170667a&w=0&k=20&c=NScqKTCW0Hb3yDC5jZMCBEGgGufwn7fejic4m2IQhnA='} alt="" />
                    <h1 className='mt-5'>ALMOND CUP</h1>
                </div>
                <div className=' flex flex-col items-center justify-center '>
                    <img className='h-1/2 w-1/2 rounded-full' src={'https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmFuaWxsYSUyMGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'} alt="" />
                    <h1 className='mt-5'>VANILLA CAKE</h1>
                </div>
                <div className=' flex flex-col items-center justify-center '>
                    <img className='h-1/2 w-1/2 rounded-full' src={'https://images.unsplash.com/photo-1627308592778-290a1ec030da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9sbCUyMGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'} alt="" />
                    <h1 className='mt-5'>CHOCO ROLLS</h1>
                </div>

            </div>
        </div>
    );
};

export default Info;