import React from 'react';
import img1 from '../../assets/home.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import the blur effect CSS



const Carousel = () => {
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
    <div className="container-fluid p-0 pb-5">
      <div className="owl-carousel header-carousel position-relative mb-5">
        <div className="owl-carousel-item position-relative">
          <div className='bg-image'>
            <div className="img-container">
              <LazyLoadImage
                effect="blur"
                src={img1}
                alt=""
                className="img-fluid"
                style={{ width: '100%' }}
              />
            </div>
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, .3)' }}>
              <div className="container">
                <div className='wow animate__animated animate__fadeInUp animate__delay-1s'>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  

}
export default Carousel;
