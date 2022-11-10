import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const MyReviewDetails = ({ review, handleDelete }) => {
    const { _id, serviceName, email, text, rating } = review
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
            <th>
                <label>
                    <button className='btn btn-ghost'>Edit</button>
                </label>
            </th>
        </tr>
    );
};

export default MyReviewDetails;