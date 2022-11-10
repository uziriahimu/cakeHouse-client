import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hook/useTitle';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useTitle('My Review')

    useEffect(() => {
        fetch(`https://service-provider-server.vercel.app/myreviews?email=${user?.email}`)

            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to Delete');
        if (proceed) {
            fetch(`https://service-provider-server.vercel.app/myreviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Deleted successfully')
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleUpdate = id => {
        fetch(`https://service-provider-server.vercel.app/myreviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(rev => rev._id !== id);
                    const approving = reviews.find(rev => rev._id === id);
                    approving.status = 'Approved'

                    const newReviews = [approving, ...remaining];
                    setReviews(newReviews);
                }
            })
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
                                handleUpdate={handleUpdate}
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