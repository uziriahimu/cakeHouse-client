import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewDetails from './ReviewDetails';

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Link to='/addreview'><button className='btn btn-warning'>Add Reviews</button></Link>
            <div className=' max-w-screen-xl mx-auto'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>review</th>
                                <th>Rating</th>

                            </tr>

                        </thead>
                        <tbody>
                            {
                                reviews.map(review => <ReviewDetails
                                    key={review._id}
                                    review={review}
                                ></ReviewDetails>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Reviews;