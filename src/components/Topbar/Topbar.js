import React from 'react'


function Topbar() {
  return (
    <div className="container-fluid bg-dark">
        <div className="row py-1 px-lg-0">
            <div className="col-lg-2 text-center text-lg-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-left text-white">
                    <small><i className="fa fa-envelope mr-0"></i>  info@example.com</small>
                </div>
            </div>
            <div className="col-lg-9 text-end text-lg-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-left text-white">
                    <small>UNIVERSAL FREIGHT SOLUTION LLC</small>
                </div>
            </div>
            <div className="col-lg-1 text-right text-lg-right">
                <div className="d-inline-flex align-items-end">
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar
