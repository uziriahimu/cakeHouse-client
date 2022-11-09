import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AddReviews = () => {
    const { user } = useContext(AuthContext)


    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const text = form.text.value
        const rating = form.rating.value

        const review = {
            customer: name,
            text,
            rating,
            photoURL
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review placed successfully')
                    form.reset();

                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div>
            <div className='w-1/2 mx-auto border rounded-lg p-5  bg-gray-100' >
                <form onSubmit={handleSubmit} className="card-body  bg-slate-300 mb-3 rounded">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name='photoURL' defaultValue={user?.photoURL} placeholder="photoURL" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Text</span>
                        </label>
                        <input type="text-area" name='text' placeholder="Review" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" name='rating' placeholder="Rating" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-purple-400 border-none" type="submit" value="Add Review" />
                    </div>
                </form>



            </div>
        </div>
    );
};

export default AddReviews;