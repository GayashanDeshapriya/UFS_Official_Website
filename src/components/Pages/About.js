import React from 'react';
import 'animate.css';
import img1 from '../../assets/about.jpg';
import './pages.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function About() {
  return (
    <div>
      <Navbar />


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
              <h2 className="mb-5 text-primary font-weight-bold" style={{ fontWeight: 'bold' }} >UNIVERSAL <span className="text-secondary" style={{ fontWeight: 'bold' }} >FREIGHT SOLUTIONS LLC</span></h2>
              <h6 className="font-weight-bold text-secondary text-uppercase mb-3">Who We are</h6>
              <p className="text-primary-second mb-5">
                Our industry forms the lifeline between the source and the consumer, the vital link: The Supply Chain.</p>
              <p className="text-primary-second mb-5">
              UFS employees, each of whom is an expert in their own fields, manage to meet the needs of our customers and partners and keep customer satisfaction at the top with their knowledge and experience, with a constant urge of learning and its ability to quickly adapting new trends. We ensure that the cargo will reach their destination in the safest and the most effective way.</p>
              <p className="text-primary-second mb-5">
              UFS, by the virtue of being an independent company, is in contact with multiple agencies in every country. We choose the optimal vehicle and agency or the representative, with regards to the volume, transportation preferences and the type of cargo, then delivers your cargo to the point of destination with optimum time at the best price.</p>
              <p className="text-primary-second mb-5">
                UFS offers a wide range of logistics and freight forwarding services to meet all your shipping needs as One Stop Shop for Total Logistics Solutions.
              </p>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
