import React from 'react';
import img1 from '../../assets/home.jpg';
import img2 from '../../assets/home1.png';
import img3 from '../../assets/home6.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import the blur effect CSS
import styled from "styled-components";





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

    <header class="py-5">
      <div class="container px-5 pb-5">
        <div class="row gx-5 align-items-center">
          <div class="col-xxl-5">

            <div class="text-center text-xxl-start">
             
              
              <h1 class="display-3 fw-bolder mb-6 text-primary animated slideInDown"><span class="text-gradient d-inline">UNIVERSAL <span className="text-secondary">FREIGHT SOLUTIONS LLC</span></span></h1>
              <div class="fs-3 fw-light  text-primary">#1 Place For Your Logistics Solution need</div>
              <div class="d-grid gap-1 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-2">

              </div>
            </div>
          </div>
          <div class="col-xxl-7">

            <div class="d-flex justify-content-center mt-5 mt-xxl-0">
              <div class="profile bg-gradient-primary-to-secondary">

                <div className='bg-image'>
                  <div className="img-container col-13  mb-1">
                    <LazyLoadImage
                      effect="blur"
                      src={img2}
                      alt=""
                      className="img-fluid"
                      style={{ width: '800px', float: 'right' }}
                    />

                  </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
}

export default Carousel;

