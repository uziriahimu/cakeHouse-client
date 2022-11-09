import React from 'react';


const Bannar = () => {
    return (
        <div >
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">

                    <img style={{ "height": "600px" }} className='w-full ' src={'https://media.istockphoto.com/id/497959594/photo/fresh-cakes.jpg?b=1&s=170667a&w=0&k=20&c=sR5so1fJnXoo_hZnJ_3ZMAi7eCifbXo0UE4BoqeWzVc='} alt="" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img style={{ "height": "600px" }} className='w-full' src={'https://images.unsplash.com/photo-1565498253128-c06e0488ddee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'} alt="" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img style={{ "height": "600px" }} className='w-full ' src={'https://images.unsplash.com/photo-1621857426350-ddab819cf0cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNha2UlMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} alt="" />

                </div>
                <div id="item4" className="carousel-item w-full">
                    <img style={{ "height": "600px" }} className='w-full ' src={'https://images.unsplash.com/photo-1582659042116-63f96b514135?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNha2UlMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} alt="" />

                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </div>
    );
};

export default Bannar;