import React from 'react';
import img1 from '../../assets/home.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';



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


            <div className='img-fluid '>

              <img className="img-fluid" src={img1} style={{ width: '100%', }} alt="" />


            </div>



            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(25, 4, 20, .5)' }}>

              <div className="container">
                <div className='wow animate__animated animate__fadeInUp animate__delay-1s'>
                  <div className="row justify-content-start">


                    <div class="container text-center py-1">

                      <h2 className="display-3 text-primary  mb-4 " style={MaintextStyle}>UNIVERSAL <span className="text-secondary">FREIGHT SOLUTIONS LLC</span></h2>
                      <h4 class="text-primary text-uppercase mb-5 animated slideInDown" style={textStyle}>one stop for all your Freight & Logistics needs</h4>
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
export default Carousel;
