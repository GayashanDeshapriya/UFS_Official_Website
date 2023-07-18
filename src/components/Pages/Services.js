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
                <h4 className="text-secondary mb-3">Air Freight</h4>
                <p className="text-primary-second">
                UFS Air Freight provides a safe, efficient, and reliable means of air transportation for your time-sensitive and high-value cargo. Our air services are tailored to your unique needs, and we take advantage of our strategic partnerships with carriers & Global partners to ensure fast and efficient delivery of your goods across the world.
                Our services can help you expand your customer reach globally through stand-alone air transport or by integrating our other inland and ocean transport modes, warehousing, and customs services, tailoring a seamless end-to-end solution. With UFS Air Freight, you can be assured of a comprehensive and reliable service that meets your specific air freight needs
                </p>
                <ul className="text-primary-second">
                <li>	Experience in handling General Cargo & DG, Pharma / Temp Control shipments, Odd Dims & Project Cargo</li>
                <li>	Preferential rates with all major airlines</li>
                <li>	Guaranteed space / BSA </li>
                <li>	Extensive network of hubs</li>
                <li>	Air Charter services</li>
                </ul>
                

                
                
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
                <h4 className="text-secondary mb-3">Ocean Freight</h4>
                <p className="text-primary-second">
                We carry your shipments from port to port, from door to door, and from door to port with standard or 
                special equipments according to your needs. With our strong global network, we are able to provide services to almost
                 every port of the world as well with extensive knowledge and experience in unique requirements and processes for hard
                  to reach geographies of the world. We are distinguished with our competitive rates, quick feedbacks and clear information flow.
                </p>
                <ul className="text-primary-second">
                <li>FCL & LCL services</li>
                <li>Consolidation services</li>
                <li>Break Bulk & RORO services </li>
                <li>Reefer & special equipment / ODC cargo</li>
                <li>Special Projects & Vessel Chartering </li>
                <li>NVOCC services</li>
                </ul>
                
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
