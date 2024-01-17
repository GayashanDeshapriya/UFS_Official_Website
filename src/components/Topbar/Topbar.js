import React from 'react'


function Topbar() {
    return (
        <div className="container-fluid bg-dark">
            <div className="row py-2 px-lg-5">
                <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center text-white">
                        <small><i className="fa fa-phone-alt mr-2"></i>00971-4-2507076</small>
                        <small className="px-3">|</small>
                        <small>Universal Freight Solutions LLC</small>
                        
                    </div>
                </div>
                
                <div className="col-lg-6 text-center text-lg-right">
                    <div className="d-inline-flex align-items-center">
                        {/* <a className="text-white px-2" href="">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="text-white px-2" href="">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="text-white px-2" href="">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="text-white px-2" href="">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="text-white pl-2" href="">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <small className="px-3 text-white">|</small> */}
                        <small className=" text-white mr-2">info@ufsllcdxb.ae</small>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Topbar
