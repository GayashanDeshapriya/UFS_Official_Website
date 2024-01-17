import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import DisplayTable from '../components/SeaChargeTable/table';
import { useState} from "react";
import Charges from "../Pages/Sea Container Charges.xlsx"


const SeaContainer = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = Charges;
    link.download = "Sea Container Charges.xlsx";

    // Set up an event listener for the download completion
    link.onload = () => {
      link.remove();
      setDownloading(false);
      // Display a popup message after successful download
      window.alert("Download completed!");
    };
    document.body.appendChild(link);
    link.click();
  };
  return (
    <div>
      <Navbar />
      <div className="container-ml py-5 px-3">
          <div className="text-center wow fadeInUp" data-wow-delay="0.10s">
            <h5 className="text-primary text-uppercase mb-2">Sea Container Charges</h5>
            <h2 className="mb-5 text-primary font-weight-bold" style={{ fontWeight: 'bold' }}>UNIVERSAL <span className="text-secondary" >FREIGHT SOLUTIONS LLC</span></h2>
          </div>
          <div className="row g-4">
            <DisplayTable />
            <div className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            </div>
            <div className='px-5 py-6'>
              <button type="button" className="btn btn-primary align-left" onClick={handleDownload} enabled={downloading}>Download</button>
            </div>
          </div>
        </div>      
      <Footer />
    </div>
  )
}
export default SeaContainer
