import img3 from '../assets/feature.jpg'

function Chooseus() {
  return (
    <div className="container-fluid bg-light my-5 wow animate__animated animate__fadeInUp" data-wow-offset="250">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img src={img3} className="img-fluid w-100" alt="" />
          </div>
          <div className="col-lg-7 py-5 py-lg-0">
            <h6 className="text-primary text-uppercase font-weight-bold">Why Choose Us</h6>
            <h1 className="mb-4 text-secondary">Faster, Safe and Trusted Logistics Services</h1>
            <p className="mb-4"></p>
            <ul className="list-inline text-primary-second">
              <li><h6><i className="far fa-dot-circle text-primary mr-3"></i>   Experience Staff</h6></li>
              <li><h6><i className="far fa-dot-circle text-primary mr-3"></i>   Unique Approach</h6></li>
              <li><h6><i className="far fa-dot-circle text-primary mr-3"></i>   Worldwide Network</h6></li>
            </ul>

          </div>
        </div>
      </div>
    </div>


  )
}
export default Chooseus;