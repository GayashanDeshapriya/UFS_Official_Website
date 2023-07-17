import React from 'react';
import service1 from '../../assets/service-1.jpg';
import service2 from '../../assets/service-2.jpg';
import service3 from '../../assets/service-3.jpg';
import service4 from '../../assets/service-4.jpg';


function Services() {
  return (
    <div>
      

      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.10s">
            <h6 className="text-primary text-uppercase">Our Services</h6>
            <h1 className="text-secondary mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img src={service1} className="img-fluid" alt="" />
                </div>
                <h4 className="text-secondary mb-3">Air Cargo Service</h4>
                <p className="text-primary-second">
                                    As an air freight solution provider UFS 
                                    handles all your concerns before they 
                                    become a hassle. Meet your time-critical deadlines and ensure safe and 
                                    smooth handling
                                    We have experience of handling
                                    General cargo and DG shipments,
                                    Pharma & temp control shipments and
                                    Odd dims & project cargo
                </p>
                <a className="btn-slide mt-2" href="">
                  <i className="fa fa-arrow-right"></i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img src={service2} className="img-fluid" alt="" />
                </div>
                <h4 className="text-secondary mb-3">Sea Cargo Service</h4>
                <p className="text-primary-second">
                                    Sea freight logistics is not complex with us. 
                                    UFS handles your sea freight needs by 
                                    going beyond the over the counter solutions 
                                    or just coordinating your cargo transportation 
                                    services. Our logistics as a service is 
                                    empowered by our experienced team, equipped 
                                    with industry knowledge, latest technology and 
                                    human know-how.
                                    This way, you can focus on growing your 
                                    business and brand and leave the middle; the 
                                    journey of your product's ocean freight 
                                    shipments to UFS.
                </p>
                <a className="btn-slide mt-2" href="">
                  <i className="fa fa-arrow-right"></i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img src={service3} className="img-fluid" alt="" />
                </div>
                <h4 className="text-secondary mb-3">Warehousing & 3PL Services</h4>
                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                <a className="btn-slide mt-2" href="">
                  <i className="fa fa-arrow-right"></i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img src={service4} className="img-fluid" alt="" />
                </div>
                <h4 className="text-secondary mb-3">Customs clearance & Delivery</h4>
                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                <a className="btn-slide mt-2" href="">
                  <i className="fa fa-arrow-right"></i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img src={service1} className="img-fluid" alt="" />
                </div>
                <h4 className="text-secondary mb-3">service4</h4>
                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                <a className="btn-slide mt-2" href="">
                  <i className="fa fa-arrow-right"></i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img src={service1} className="img-fluid" alt="" />
                </div>
                <h4 className="text-secondary mb-3">service5</h4>
                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                <a className="btn-slide mt-2" href="">
                  <i className="fa fa-arrow-right"></i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Services;
