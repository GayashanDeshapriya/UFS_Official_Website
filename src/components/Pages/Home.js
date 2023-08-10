import React, { useState, useEffect } from 'react';
import Carousel from '../Carousel/Carousel';
import ServicesHome from './ServicesHome';
import Chooseus from '../whyChooseUs';

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
      {carouselLoaded ? <Carousel /> : <p></p>}
      {servicesLoaded ? <ServicesHome /> : <p></p>}
      {servicesLoaded ? <Chooseus /> : null}
    </div>
  );
}

export default Home;

