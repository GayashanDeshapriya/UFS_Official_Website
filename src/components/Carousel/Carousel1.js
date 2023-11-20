import React from 'react';
import img1 from '../../assets/home1.jpg';

const Carousel1 = () => {
    const MaintextStyle = {
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
        WebkitTextStrokeWidth: '0.35px',
        WebkitTextStrokeColor: 'white',
        fontSize: '6vw',
    };

    const textStyle = {
        fontWeight: 'bold',
        fontSize: '3vw',

    };

    return (
        <div className="container-fluid p-0 pb-0">
            <div className="owl-carousel header-carousel position-relative mb-5">
                <div className="owl-carousel-item position-relative">
                    <div className='bg-image'>
                        <div className='img-fluid '>
                            <img className="img-fluid" src={img1} style={{ width: '100%', height:'50%' }} alt="" />
                        </div>
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(1, 5, 20, .6)' }}>
                            <div className="container">
                                <div className='wow animate__animated animate__fadeInUp animate__delay-1s'>
                                    <div className="row justify-content-start">
                                        <div class="container text-center py-2">
                                            <h2 className="display-3 text-primary  mb-4 " style={MaintextStyle}>UNIVERSAL <span className="text-secondary">FREIGHT SOLUTIONS LLC</span></h2>
                                            <h4 class="text-light text-uppercase mb-5 animated slideInDown" style={textStyle}>#1 Place For Your Freight & Logistics needs</h4>
                                            <div class="mx-auto" style={{ width: '100%', maxWidth: '600px' }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}
export default Carousel1;
