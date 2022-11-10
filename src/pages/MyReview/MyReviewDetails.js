import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const MyReviewDetails = ({ review, handleDelete, handleUpdate }) => {
    const { _id, serviceName, email, text, rating, status } = review
    return (
        <tr>
            <td>{serviceName}</td>
            <td>{text}</td>
            <td>{email}</td>
            <td>{rating}</td>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'><FaTrashAlt className='text-red-600 text-xl' ></FaTrashAlt></button>


                </label>
            </th>
            {/* <th>
                <label>
                    <button className='btn btn-ghost'>Edit</button>
                </label>
            </th> */}
            <th>
                <button
                    onClick={() => handleUpdate(_id)}
                    className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>
    );
};

export default MyReviewDetails;