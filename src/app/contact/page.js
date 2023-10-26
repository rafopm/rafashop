import React from 'react'
import GoogleMaps from '../components/GoogleMaps'

const Contact = () => {
  return (
    <div> <div className="container-fluid">
      <h2 className="section-title position-relative text-uppercase mt-5 mx-xl-5 mb-4"><span className="pr-3">Contáctanos</span></h2>
      <div className="row px-xl-5">
        <div className="col-lg-7 mb-5">
          <div className="contact-form  p-30">
            <div id="success"></div>
            <form name="sentMessage" id="contactForm" >
              <div className="control-group">
                <input type="text" className="form-control rounded-0 " id="name" placeholder="Nombre"
                  required="required" data-validation-required-message="Escriba su nombre" />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input type="email" className="form-control rounded-0 " id="email" placeholder="Email"
                  required="required" data-validation-required-message="Escriba su email" />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input type="text" className="form-control rounded-0 " id="subject" placeholder="Asunto"
                  required="required" data-validation-required-message="Escriba el asunto" />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <textarea className="form-control rounded-0 " rows="8" id="message" placeholder="Mensaje"
                  required="required"
                  data-validation-required-message="Escriba su mensaje"></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div>
                <button className="btn btn-primary py-2 px-4 rounded-0 border-0" type="submit" id="sendMessageButton" style={{ backgroundColor: "#FFD333",color:"black" }}>Enviar Mensaje</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-5 mb-5">
          <div className=" p-30 mb-30">
            <GoogleMaps />
          </div>
          <div className=" p-30 mb-3">
            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Calle 123, Lima, Perú</p>
            <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
            <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3"></i>+51 123 456 789</p>
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default Contact