import React from 'react';
import img1 from '../../assets/home.jpg';
import './Carousel.css'

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
    
  };

  return (
    <div className="container-fluid p-0 pb-5">
      <div className="owl-carousel header-carousel position-relative mb-5">
        <div className="owl-carousel-item position-relative">
        <img className="img-fluid" src={img1} style={{ width: '100%',  }} alt="" />
        

          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(1, 5, 20, .6)' }}>
          
            <div className="container">
            <div className='wow animate__animated animate__fadeInUp'>
              <div className="row justify-content-start">
                
                
                <div class="container text-center py-5">
            
            <h2 className="display-3 text-primary  mb-1 " style={MaintextStyle}>UNIVERSAL <span className="text-secondary">FREIGHT SOLUTIONS LLC</span></h2>
            <h5 class="text-white text-uppercase mb-3 animated slideInDown">#1 Place For Your Logistics Solution need</h5>
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
    
  );
  
  }
export default Carousel;
