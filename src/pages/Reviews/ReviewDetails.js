import React from 'react';

const ReviewDetails = ({ review }) => {
    const { service, serviceName, email, photoURL, customer, text, rating } = review
    return (
        <tr>
            <td>{service}</td>
            <td>{serviceName}</td>
            <td>
                <div className='w-20 h-20 rounded'>
                    <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                </div>
            </td>
            <td><div className="font-bold">{customer}</div></td>
            <td>{email}</td>
            <td>{text}</td>
            <td>{rating}</td>
        </tr>
    );
};

export default ReviewDetails;