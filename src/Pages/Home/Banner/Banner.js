import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full mb-16">
            <div id="slide1" className=" carousel-item relative w-full">
                <div className='img-gradient'>
                    <img alt="" src={img1} className="rounded-2xl w-full" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-start ml-24 transform -translate-y-1/2 left-5 right-5 top-1/4">
                    <h1 className='font-bold text-6xl text-white'>Affordable <br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-start ml-24 w-2/4 transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <p className='text-xl text-white '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-start ml-24 w-2/4 transform -translate-y-1/2 left-5 right-5 top-3/4">
                    <button className="btn btn-error mr-5">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                </div>
            </div>
            <div id="slide2" className=" carousel-item relative w-full">
                <div className='img-gradient'>
                    <img alt="" src={img2} className="rounded-2xl w-full" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-start ml-24 transform -translate-y-1/2 left-5 right-5 top-1/4">
                    <h1 className='font-bold text-6xl text-white'>Affordable <br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-start ml-24 w-2/4 transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <p className='text-xl text-white '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-start ml-24 w-2/4 transform -translate-y-1/2 left-5 right-5 top-3/4">
                    <button className="btn btn-error mr-5">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                </div>
            </div>
            <div id="slide3" className=" carousel-item relative w-full">
                <div className='img-gradient'>
                    <img alt="" src={img3} className="rounded-2xl w-full" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-start ml-24 transform -translate-y-1/2 left-5 right-5 top-1/4">
                    <h1 className='font-bold text-6xl text-white'>Affordable <br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-start ml-24 w-2/4 transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <p className='text-xl text-white '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-start ml-24 w-2/4 transform -translate-y-1/2 left-5 right-5 top-3/4">
                    <button className="btn btn-error mr-5">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                </div>
            </div>
            <div id="slide4" className=" carousel-item relative w-full">
                <div className='img-gradient'>
                    <img alt="" src={img4} className="rounded-2xl rounded-2xl w-full" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-start ml-24 transform -translate-y-1/2 left-5 right-5 top-1/4">
                    <h1 className='font-bold text-6xl text-white'>Affordable <br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-start ml-24 w-2/4 transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <p className='text-xl text-white '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-start ml-24 w-2/4 transform -translate-y-1/2 left-5 right-5 top-3/4">
                    <button className="btn btn-error mr-5">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                </div>
            </div>
            <div id="slide5" className=" carousel-item relative w-full">
                <div className='img-gradient'>
                    <img alt="" src={img5} className="rounded-2xl w-full" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-start ml-24 transform -translate-y-1/2 left-5 right-5 top-1/4">
                    <h1 className='font-bold text-6xl text-white'>Affordable <br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-start ml-24 w-2/4 transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <p className='text-xl text-white '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-start ml-24 w-2/4 transform -translate-y-1/2 left-5 right-5 top-3/4">
                    <button className="btn btn-error mr-5">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                </div>
            </div>
            <div id="slide6" className=" carousel-item relative w-full">
                <div className='img-gradient'>
                    <img alt="" src={img6} className="rounded-2xl w-full" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-start ml-24 transform -translate-y-1/2 left-5 right-5 top-1/4">
                    <h1 className='font-bold text-6xl text-white'>Affordable <br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-start ml-24 w-2/4 transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <p className='text-xl text-white '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-start ml-24 w-2/4 transform -translate-y-1/2 left-5 right-5 top-3/4">
                    <button className="btn btn-error mr-5">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;