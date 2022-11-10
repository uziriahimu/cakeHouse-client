import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import ReviewDetails from './ReviewDetails';

const Reviews = () => {
    useTitle('Review')
    const [reviews, setReviews] = useState([])
    // const { _id } = useLoaderData()

    useEffect(() => {
        fetch('https://service-provider-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>

            <div className=' max-w-screen-xl mx-auto'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Service Id</th>
                                <th>Service Name</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
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