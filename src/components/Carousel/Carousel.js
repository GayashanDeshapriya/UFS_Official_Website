import React from 'react';
import img1 from '../../assets/Picture1.jpg';
import img2 from '../../assets/home3.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Carousel.css';
import { motion } from "framer-motion"
import { inView } from "framer-motion"
import { useInView } from "react-intersection-observer";


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

  const headerStyle = {
    backgroundImage: `url(${img1})`, // Set the image as background
    backgroundSize: 'cover', // Adjust background size to cover the header
    backgroundPosition: 'center', // Center the background image
  };


  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (

    <header class="py-5 mb-5  linear-gradient" >

      <div class="container px-3 pb-1">
        <div class="row gx-2 align-items-center">
          <div class="col-xxl-5">

            <div class="text-center text-xxl-start">
              <h1 class="display-1 fw-bolder mb-6 text-primary animated slideInDown text-outline"><span class="text-gradient d-inline">UNIVERSAL <span className="text-secondary">FREIGHT SOLUTIONS LLC</span></span></h1>
              <div class="fs-3 fw-light  text-white">#1 Place For Your Logistics Solution need</div>
              <div class="d-grid gap-1 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-2">
              </div>
            </div>
          </div>
          <div class="col-xxl-7">
            <div class="d-flex justify-content-center mt-5 mt-xxl-0">
              <div class="profile bg-gradient-primary-to-secondary">
                <div className='bg-image'>
                  <motion.div
                    className="img-container col-12 mb-5 "
                    ref={ref}
                    initial={{ y: "15vw", opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: "17vw", opacity: 0 }}
                    transition={{ duration: 1.6, ease: "easeInOut" }}>
                    <LazyLoadImage
                      effect="blur"
                      src={img2}
                      alt=""
                      className="img-fluid"
                      style={{ width: '1050px', height: '460px', float: 'right' }}
                    />
                  </motion.div>

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

