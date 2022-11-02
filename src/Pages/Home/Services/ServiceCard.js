import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, price, name } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className='text-xl text-orange-500 font-semibold'>Price :${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;