import React from 'react';
import img1 from '../../assets/home.jpg';

const Carousel = () => {

  const MaintextStyle = {
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
    WebkitTextStrokeWidth: '0.35px',
    WebkitTextStrokeColor: 'white',
    paddingTop: '0px',
  };

  const textStyle = {
    fontWeight: 'bold',
    paddingTop: '0px',
    fontSize: '40px',
    paddingTop: '40px',
  };

  return (
    <div className="container-fluid p-0 pb-5">
      <div className="owl-carousel header-carousel position-relative mb-5">
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src={img1} alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(6, 3, 21, .5)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-3 text-primary animated slideInDown mb-4" style={MaintextStyle}>UNIVERSAL <span className="text-secondary">FREIGHT SOLUTIONS LLC</span></h1>
                  <h3 className="display-3 text-white mb-4" style={textStyle}>#1 Place For Your Logistics Solution need</h3>
                  <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
