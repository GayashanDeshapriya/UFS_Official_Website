import React from 'react';
import img1 from '../../assets/home.jpg';
import img2 from '../../assets/home1.png';
import img3 from '../../assets/home6.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import the blur effect CSS



const Carousel = () => {
  const maintextStyle = {
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

  const opacity = 0;

  return (
    <div className="container-fluid position-relative p-0">
      <div
        className="container-fluid py-1 mb-3 hero-header loading='lazy'"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          width: '100%',
          height: '600px',
          backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        }}
      >
        <div className="container py-1">
          <div className="row justify-content-left py-1">
            <div className="col-lg-8 pt-lg-4 mt-lg-5 text-left">
              <h1
                className="display-3 text-primary mb-1 animated slideInDown"
                style={maintextStyle}
              >
                UNIVERSAL <span className="text-secondary">FREIGHT SOLUTIONS LLC</span>
              </h1>
              <h3 className="display-3 text-primary mb-4" style={textStyle}>
                #1 Place For Your Logistics Solution need
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  
 


}
export default Carousel;
