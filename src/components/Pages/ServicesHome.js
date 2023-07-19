import { Link } from 'react-router-dom';

export default function ServicesHome() {
    const container = {
        width: '100%',
        paddingRight: '15px',
        paddingLeft: '15px',
        marginRight: 'auto',
        marginLeft: 'auto',
    };

    return (
        <div className="container-fluid pt-1" style={container}>
            <div className="container">
                <div className="text-center pb-2">
                    <h6 className="text-primary text-uppercase font-weight-bold">Our Services</h6>
                    <h1 className="mb-4 text-secondary">Best Logistic Services</h1>

                </div>
                <div className="row pb-3">
                    <div className="col-lg-3 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                            <i className="fa fa-2x fa-plane text-dark pr-3"></i>
                            <h6 className="text-white font-weight-medium m-0">Air Freight</h6>
                        </div>
                        <p className="text-primary-second">UFS Air Freight provides a safe, efficient, and reliable means of air transportation for your time-sensitive and high-value cargo.</p>

                    </div>
                    <div className="col-lg-3 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                            <i className="fa fa-2x fa-ship text-dark pr-3"></i>
                            <h6 className="text-white font-weight-medium m-0">Ocean Freight</h6>
                        </div>
                        <p className="text-primary-second">We carry your shipments from port to port, from door to door, and from door to port with standard or special equipments according to your needs.</p>

                    </div>
                    <div className="col-lg-3 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                            <i className="fa fa-2x fa-truck text-dark pr-3"></i>
                            <h6 className="text-white font-weight-medium m-0">Cross Border Logistics</h6>
                        </div>
                        <p className="text-primary-second">Non-trucker own carrier operator with experience in GCC & ME market with reliable trucking partnership in running specific route within GCC and ME countries.</p>

                    </div>
                    <div className="col-lg-3 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                            <i className="fa fa-2x fa-store text-dark pr-3"></i>
                            <h6 className="text-white font-weight-medium m-0">Warehousing & 3PL Services</h6>
                        </div>
                        <p className="text-primary-second">Apart from general goods, UFS provides unique and exclusive 3PL services for special products such as exercise goods, temp control cargo, food stuff, project cargo, etc.</p>

                    </div>



                </div>
                <div className="text-center">
                    <Link to="/Service" className="btn btn-primary mt-3 py-2 px-4">
                        Read More
                    </Link>
                </div>
            </div>



        </div>
    )
}