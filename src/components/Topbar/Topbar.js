import React from 'react'


function Topbar() {
    return (
        <div class="container-fluid bg-dark">
            <div class="row py-2 px-lg-5">
                <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div class="d-inline-flex align-items-center text-white">
                        <small><i class="fa fa-phone-alt mr-2"></i>00971-4-2507076</small>
                        <small class="px-3">|</small>
                        <small>Universal Freight Solutions LLC</small>
                        
                    </div>
                </div>
                
                <div class="col-lg-6 text-center text-lg-right">
                    <div class="d-inline-flex align-items-center">
                        <a class="text-white px-2" href="">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="text-white px-2" href="">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a class="text-white px-2" href="">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a class="text-white px-2" href="">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a class="text-white pl-2" href="">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <small class="px-3 text-white">|</small>
                        <small class=" text-white mr-2">info@ufsllcdxb.ae</small>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Topbar
