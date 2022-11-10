import React from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../hook/useTitle';

const AddService = () => {
    useTitle('Add service')
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const image = form.image.value
        const price = form.price.value
        const rating = form.rating.value
        const details = form.details.value

        const services = {
            name,
            image,
            price,
            rating,
            details

        }
        fetch('https://service-provider-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('services placed successfully')
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
                        <input type="text" name='name' placeholder="name of service" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name='image' placeholder="image of service" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text-area" name='details' placeholder="Description" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Add Price" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-purple-400 border-none" type="submit" value="Add Service" />
                    </div>
                </form>



            </div>
        </div>
    );
};

export default AddService;