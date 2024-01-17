import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Table from '../components/SeaChargeTable/table'


const SeaContainer = () => {
  
  return (
    <div>
      <Navbar />
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.10s">
            
            <h5 className="text-primary text-uppercase mb-2">Sea Container Charges</h5>
            <h2 className="mb-5 text-primary font-weight-bold" style={{ fontWeight: 'bold' }}>UNIVERSAL <span className="text-secondary" >FREIGHT SOLUTIONS LLC</span></h2>
          </div>
          <div className="row g-4">
          <Table />
            <div className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SeaContainer
