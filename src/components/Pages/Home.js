import React from 'react'
import img3 from '../../assets/feature.jpg'
import About from './About'
import Services from './Services'
import Header from '../Header/Header'
import Carousel from '../Carousel/Carousel'
import ServicesHome from './ServicesHome'



function Home() {
   
  

  return (

<div>

    
    <Carousel/>
    <ServicesHome/>
    
    <div className="container-fluid bg-light my-5 wow animate__animated animate__fadeInUp" data-wow-offset="250">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5">
        <img src={img3} className="img-fluid w-100" alt="" />
      </div>
      <div className="col-lg-7 py-5 py-lg-0">
        <h6 className="text-primary text-uppercase font-weight-bold">Why Choose Us</h6>
        <h1 className="mb-4">Faster, Safe and Trusted Logistics Services</h1>
        <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
        <ul className="list-inline">
          <li><h6><i className="far fa-dot-circle text-primary mr-3"></i>   Experience Staff</h6></li>
          <li><h6><i className="far fa-dot-circle text-primary mr-3"></i>   Unique Approach</h6></li>
          <li><h6><i className="far fa-dot-circle text-primary mr-3"></i>   Worldwide Network</h6></li>
        </ul>
        <a href="" className="btn btn-primary mt-3 py-2 px-4">Learn More</a>
      </div>
    </div>
  </div>
</div>

</div>


  );
  
  
}

export default Home
