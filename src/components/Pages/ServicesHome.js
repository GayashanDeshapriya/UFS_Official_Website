export default function ServicesHome(){
    const container = {
        width: '100%',
        paddingRight: '15px',
        paddingLeft: '15px',
        marginRight: 'auto',
        marginLeft: 'auto',
      };
      
    return(
        <div class="container-fluid pt-5" style={container}>
        <div class="container">
            <div class="text-center pb-2">
                <h6 class="text-primary text-uppercase font-weight-bold">Our Services</h6>
                <h1 class="mb-4 text-secondary">Best Logistic Services</h1>
            </div>
            <div class="row pb-3">
                <div class="col-lg-3 col-md-6 text-center mb-5">
                    <div class="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                        <i class="fa fa-2x fa-plane text-dark pr-3"></i>
                        <h6 class="text-white font-weight-medium m-0">Air Freight</h6>
                    </div>
                    <p className="text-primary-second">UFS Air Freight provides a safe, efficient, and reliable means of air transportation for your time-sensitive and high-value cargo.</p>
                    <a class="border-bottom text-decoration-none" href="">Read More</a>
                </div>
                <div class="col-lg-3 col-md-6 text-center mb-5">
                    <div class="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                        <i class="fa fa-2x fa-ship text-dark pr-3"></i>
                        <h6 class="text-white font-weight-medium m-0">Ocean Freight</h6>
                    </div>
                    <p className="text-primary-second">We carry your shipments from port to port, from door to door, and from door to port with standard or special equipments according to your needs.</p>
                    <a class="border-bottom text-decoration-none" href="">Read More</a>
                </div>
                <div class="col-lg-3 col-md-6 text-center mb-5">
                    <div class="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                        <i class="fa fa-2x fa-truck text-dark pr-3"></i>
                        <h6 class="text-white font-weight-medium m-0">Cross Border Logistics</h6>
                    </div>
                    <p className="text-primary-second">Non-trucker own carrier operator with experience in GCC & ME market with reliable trucking partnership in running specific route within GCC and ME countries.</p>
                    <a class="border-bottom text-decoration-none" href="">Read More</a>
                </div>
                <div class="col-lg-3 col-md-6 text-center mb-5">
                    <div class="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                        <i class="fa fa-2x fa-store text-dark pr-3"></i>
                        <h6 class="text-white font-weight-medium m-0">Warehousing & 3PL Services</h6>
                    </div>
                    <p className="text-primary-second">Apart from general goods, UFS provides unique and exclusive 3PL services for special products such as exercise goods, temp control cargo, food stuff, project cargo, etc.</p>
                    <a class="border-bottom text-decoration-none" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
    )
}