import React from 'react';
import 'animate.css';
import Navbar from '../Navbar/Navbar';
import img1 from '../../assets/about.jpg';
import Topbar from '../Topbar/Topbar';
import Footer from '../Footer/Footer';
import './pages.css';

function About() {
  return (
    <div>
      

      <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container about py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div
              className="col-lg-6 ps-lg-0 wow animate__animated animate__fadeInLeft"
              data-wow-delay="0.1s"
              style={{ minHeight: '400px' }}
            >
              <div className="position-relative h-100">
                <img
                  src={img1}
                  className="position-absolute img-fluid w-100 h-100"
                  style={{ objectFit: 'cover' }}
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-6 about-text wow animate__animated animate__fadeInRight"
              data-wow-delay="0.3s"
            >
              <h5 className="text-secondary text-uppercase mb-3">About Us</h5>
              <h2 className="mb-5 text-primary font-weight-bold">UNIVERSAL FREIGHT SOLUTIONS LLC</h2>
              <h6 className="font-weight-bold text-secondary text-uppercase mb-3">Who We are</h6>
              <p className="text-primary-second mb-5">
                Founded in 2021 in UAE, UFS is an international cargo transport agent with a global network of agents, and
                a member of JCTrans & WOF networks.
              </p>

              <h6 className="text-secondary text-uppercase mb-3">our mission</h6>
              <p className="text-primary-second mb-5">
                We are in the business of coordinating your delivery and logistics needs, but this definition oversimplifies
                the real work we do. In this ecosystem our industry forms the lifeline between the source and the consumer,
                the vital link: The Supply Chain Our mission is to excel in doing the quite work that allows for the
                movements of goods across continents and provide simple and efficient services to all our customers.
              </p>

              <h6 className="font-weight-bold text-secondary text-uppercase mb-3">our Vision</h6>
              <p className="text-primary-second mb-5">
                Strive to be an excellent, sustainable development and international logistics enterprise in the region
              </p>

              <div className="row g-4 mb-5">
                <div className="col-sm-6 wow animate__animated animate__fadeIn" data-wow-delay="0.5s">
                  <i className="fa fa-globe fa-3x text-primary mb-3"></i>
                  <h5>Global Coverage</h5>
                  <p className="m-0">
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.
                  </p>
                </div>
                <div className="col-sm-6 wow animate__animated animate__fadeIn" data-wow-delay="0.7s">
                  <i className="fa fa-shipping-fast fa-3x text-primary mb-3"></i>
                  <h5>On Time Delivery</h5>
                  <p className="m-0">
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.
                  </p>
                </div>
              </div>
              <a href="" className="btn btn-primary py-3 px-5">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default About;
