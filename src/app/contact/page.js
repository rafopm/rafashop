import React from 'react'

const Contact = () => {
  return (
    <div> <div className="container-fluid">
      <h2 className="section-title position-relative text-uppercase mt-5 mx-xl-5 mb-4"><span className="pr-3">Contáctanos</span></h2>
      <div className="row px-xl-5">
        <div className="col-lg-7 mb-5">
          <div className="contact-form  p-30">
            <div id="success"></div>
            <form name="sentMessage" id="contactForm" novalidate="novalidate">
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
            <iframe style={{ width: "100%", height: "250px", border: "0" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d689.7520315110492!2d-77.03845047140406!3d-12.055441249924554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1ses-419!2spe!4v1696920731502!5m2!1ses-419!2spe"
              frameborder="0" allowfullscreen="" aria-hidden="false" loading="lazy"  tabindex="0" ></iframe>
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