import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-10 rounded-3xl shadow-2xl">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt='' className=" h-full w-4/5 rounded-lg shadow-2xl" />
                    <img src={parts} alt='' className="absolute w-1/2 right-5 top-1/2 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl font-bold text-orange-500'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br />in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button  className="btn bg-orange-600 text-white border-0">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;