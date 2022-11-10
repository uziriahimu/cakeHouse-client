import React from 'react';

const MyReviewDetails = ({ review }) => {
    const { serviceName, email, text, rating } = review
    return (
        <tr>
            <td>{serviceName}</td>
            <td>{text}</td>
            <td>{email}</td>
            <td>{rating}</td>
            <th>
                <label>
                    <button className='btn btn-ghost'>X</button>
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