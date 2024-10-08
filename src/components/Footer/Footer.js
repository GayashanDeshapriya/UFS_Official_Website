import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/ufs.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Footer = ({ onQuickLinkClick }) => {
  useEffect(() => {
    const handleLinkClick = () => {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Attach the click event listener to all the quick links
    const quickLinks = document.querySelectorAll('.quick-link');
    quickLinks.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    // Cleanup the event listeners when the component unmounts
    return () => {
      quickLinks.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <div className="container-fluid bg-secondary text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{ marginTop: '6rem' }}>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Address</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-4"></i>
              Office 203, Bushaqer Building, Block B.
              PO Box 35277, Al Garhoud,
              Dubai, UAE.</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>00971-4-2507076</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@ufsllcdxb.ae</p>
            {/* <div className="d-flex pt-2">
              <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-twitter"></i></Link>
              <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-facebook-f"></i></Link>
              <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-youtube"></i></Link>
              <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-linkedin-in"></i></Link>
            </div> */}
          </div>

          <div className="col-lg-4 px-3 col-md-4">
            <h4 className="text-light  mb-4">Quick Links</h4>
            <Link to="/about" className="btn btn-link quick-link" >About Us</Link>
            <Link to="/contact" className="btn btn-link quick-link">Contact Us</Link>
            <Link to="/services" className="btn btn-link quick-link">Our Services</Link>
          </div>
          <div className="col-lg-5 col-md-6">
            <LazyLoadImage
              effect="blur"
              src={logo}
              alt="UFS"
              className="img-fluid"
              style={{ width: '350px', height: 'auto' }}
            />

          </div>
          {/* <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Newsletter</h4>
            <p>Fueling Your Logistics Success: Subscribe to Our Newsletter Today!</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <form>
                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              </form>
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link className="border-bottom" to="#">UFS 2023</Link>, All Right Reserved...<br />
              Designed & Developed by <Link className="border-bottom" to="#">nexlab360</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
