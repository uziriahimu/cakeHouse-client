import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://service-provider-server.vercel.app/reviews?email=${user?.email}`)

            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://service-provider-server.vercel.app/myreviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <h2 className="text-5xl">You have {reviews.length} reviews</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Service Name</th>
                            <th>Reviews</th>
                            <th>Email</th>
                            <th>Rating</th>
                            <th>
                                Delete
                            </th>
                            <th>
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <MyReviewDetails

                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></MyReviewDetails>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;