import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div><div className="container-fluid bg-dark text-secondary mt-3 pt-2">
            <div className="row px-xl-5 pt-5">
                <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                    <h5 className="text-secondary text-uppercase mb-4">Contáctanos</h5>
                    <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
                    <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Calle 123, Lima, Perú</p>
                    <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@rafashop.com</p>
                    <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+51 123 456 789</p>
                </div>
                <div className="col-lg-8 col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">Síguenos</h5>
                            <div className="d-flex gap-2" >
                                <a className="btn btn-primary btn-square mr-2 rounded-0 border-0" href="#" style={{background:'#FFD333', color:"black"}}><FontAwesomeIcon icon={faTwitter} /></a>
                                <a className="btn btn-primary btn-square mr-2 rounded-0 border-0" href="#" style={{background:'#FFD333', color:"black"}}><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a className="btn btn-primary btn-square mr-2 rounded-0 border-0" href="#" style={{background:'#FFD333', color:"black"}}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                <a className="btn btn-primary btn-square  rounded-0 border-0" href="#" style={{background:'#FFD333', color:"black"}}><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h5 className="text-secondary text-uppercase mb-4">Mi Cuenta</h5>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                                <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Shop</a>
                                <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                                <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                                <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                                <a className="text-secondary" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h5 className="text-secondary text-uppercase mb-4">Noticias</h5>
                            <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                            <form action="">
                                <div className="input-group gap-2">
                                    <input type="text" className="form-control rounded-0 border-0" placeholder="Correo electrónico" />
                                    <div className="input-group-append rounded-0 border-0">
                                        <button className="btn btn-primary rounded-0 border-0" style={{background:'#FFD333', color:"black"}}>Suscribirse</button>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="row border-top mx-xl-5 py-4" style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}>
                <div className="col-md-6 px-xl-0">
                    <p className="mb-md-0 text-center text-md-left text-secondary">
                        &copy;  All Rights Reserved. Designed
                    </p>
                </div>
                <div className="col-md-6 px-xl-0 text-center text-md-right">
                    <img className="img-fluid" src="img/payments.png" alt="" />
                </div>
            </div>
        </div></div>
    )
}

export default Footer