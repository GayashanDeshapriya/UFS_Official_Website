import React, { useState, useEffect } from 'react';
import Carousel1 from '../components/Carousel/Carousel1';
import ServicesHome from './ServicesHome';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import img3 from '../assets/Picture1.jpg'



function Home() {
  const [carouselLoaded, setCarouselLoaded] = useState(false);
  const [servicesLoaded, setServicesLoaded] = useState(false);


  useEffect(() => {
    // Simulate the loading process (you can replace setTimeout with actual data loading)
    const carouselLoadTimeout = setTimeout(() => {
      setCarouselLoaded(true);
    }, 0); // Adjust the time as needed

    return () => clearTimeout(carouselLoadTimeout);
  }, []);

  useEffect(() => {
    if (carouselLoaded) {
      // Simulate the loading process (you can replace setTimeout with actual data loading)
      const servicesLoadTimeout = setTimeout(() => {
        setServicesLoaded(true);
      }, 500); // Adjust the time as needed

      return () => clearTimeout(servicesLoadTimeout);
    }
  }, [carouselLoaded]);


  return (
    <div>
      <Navbar />

      {carouselLoaded ? <Carousel1 /> : <p></p>}
      {servicesLoaded ? <ServicesHome /> : <p></p>}


      <div className="container-fluid bg-light my-5 wow animate__animated animate__fadeInUp" data-wow-offset="250">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <img src={img3} style={{ width: '' }} className="img-fluid w-100" alt="" />
            </div>
            <div className="col-lg-4 py-5 py-lg-0">
              <h6 className="text-primary text-uppercase font-weight-bold">Why Choose Us</h6>
              <h1 className="mb-4 text-secondary">Fast, Safe and Trusted Logistics Services</h1>
              <p className="mb-4"></p>
              <ul className="list-inline text-primary-second">
                <li><h6><i className="far fa-dot-circle text-primary mr-3"></i>   Experienced Staff</h6></li>
                <li><h6><i className="far fa-dot-circle text-primary mr-3"></i>   Innovative Approach</h6></li>
                <li><h6><i className="far fa-dot-circle text-primary mr-3"></i>   Worldwide Network</h6></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;

