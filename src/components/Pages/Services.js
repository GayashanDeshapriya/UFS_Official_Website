import React from 'react';
import service1 from '../../assets/service-1.jpg';
import service2 from '../../assets/service-2.jpg';
import service3 from '../../assets/service-3.jpg';
import service4 from '../../assets/service-4.jpg';
import service7 from '../../assets/service-7.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useState, useEffect } from "react";
import Charges from "../Pages/Sea Container Charges.xlsx"


function Services() {

  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = Charges;
    link.download = "Sea Container Charges.xlsx";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };


  return (
    <div>
      <Navbar />

      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.10s">

            <h5 className="text-primary text-uppercase mb-2">Explore Our Services</h5>
            <h2 className="mb-5 text-primary font-weight-bold" style={{ fontWeight: 'bold' }}>UNIVERSAL <span className="text-secondary" >FREIGHT SOLUTIONS LLC</span></h2>
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
                  We carry your shipments from port to port, door to door and door to port with standard or special equipments according to your
                  needs. With our strong global network, we are able to provide services to almost every port of the world as well with extensive
                  knowledge and experience in unique requirements and processes for hard to reach geographies of the world. We are distinguished
                  with our competitive rates, quick feedbacks and clear information flow.
                </p>
                <ul className="text-primary-second">
                  <li>FCL & LCL services</li>
                  <li>Consolidation services</li>
                  <li>Break Bulk & RORO services </li>
                  <li>Reefer & special equipment / ODC cargo</li>
                  <li>Special Projects & Vessel Chartering </li>
                  <li>NVOCC services</li>
                </ul>
                <button type="button" className="btn btn-primary "onClick={handleDownload} disabled={downloading}>Sea Container Charges</button>
                
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img src={service7} className="img-fluid" alt="" />
                </div>
                <h4 className="text-secondary mb-3">Cross Border Logistics</h4>
                <p className='text-primary-second'>Non-truck own carrier operator with experience in GCC & ME market with reliable trucking partnership
                  in running specific route within GCC and ME countries. It associates all sorts of service to meet with Shipper’s
                  schedule. Service integrated with Bond-trucking schedule, customs brokers and Cross-border trucker cross-docking
                  both Full Truckload (FTL) and Less Than Truckload (LTL). Specialized and Intermodal partners, which allows us
                  to offer a high degree of flexibility while maintaining competitive pricing.</p>
                <ul className="text-primary-second">
                  <li>Full Truckload (FTL)</li>
                  <li>Less Than Truckload (LTL)</li>
                  <li>Special equipment and project cargo transportation </li>

                </ul>

              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img src={service3} className="img-fluid" alt="" />
                </div>
                <h4 className="text-secondary mb-3">Warehousing & 3PL Services</h4>
                <p className='text-primary-second'>Apart from general goods, UFS provides unique and exclusive 3PL services for special products such as exercise goods,
                  temp control cargo, food stuff, project cargo, etc.
                  UFS provide 3PL solutions for long term, short term, dedicated and common facilities in Jebel Ali Free Zone and outside
                  Free Zone Area.
                </p>
                <ul className='text-primary-second'>
                  <li>Storage facility for Temp control and non-Temp control cargo</li>
                  <li>3PL and other value-added service</li>
                </ul>

              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                  <img src={service4} className="img-fluid" alt="" />
                </div>
                <h4 className="text-secondary mb-3">Customs Clearance & Delivery </h4>
                <p className='text-primary-second'>UFS has the experience & capability of handling all types of customs declaration such as General Trade, Repair & Return goods,
                  Sample Advertising products, Temporary Import & Export, Free Zone Imports & Exports, all kinds of Processing Trade Returned
                  Goods, ATA documents, Integrated Customs Clearance, etc.
                  Our dedicated delivery team is available to deliver goods at your premises 24/7 as per your convenience to ensure there is no
                  interruption to the production line/supply chain.
                </p>
                <ul className='text-primary-second'>
                  <li>A wide range of pick-up and delivery fleet</li>
                  <li>Professional one-stop ground operation service</li>
                  <li>24/7 Customs Clearance service</li>
                  <li>Pre Customs Clearance service</li>
                  <li>Standardized Operation process</li>
                  <li>DAP/DDP services globally</li>
                </ul>

              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.7s"
            >

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
