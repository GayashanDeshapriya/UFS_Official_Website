import React from 'react';
import img1 from '../../assets/header.jpg';
import img2 from '../../assets/carousel-1.jpg';

function Header() {
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6 ), rgba(0, 0, 0, 0.6)), url(${img2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
   
  };

  const titleStyle = {
    color: 'white',
    fontSize: '2.9rem',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
  };

  const subTitleStyle = {
    color: 'white',
    fontSize: '3.9rem',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
  };

  return (
    <div style={headerStyle}>
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-primary mb-4" style={titleStyle}>Safe & Faster</h1>
          <h1 className="text-white display-3 mb-5"style={subTitleStyle}>Logistics Services</h1>
          <div className="mx-auto" style={{ width: '100%', maxWidth: '800px' }}>
            <div className="input-group">
              <div className="input-group-append">
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
