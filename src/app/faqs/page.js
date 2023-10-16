'use client'
import { Accordion, Card, Button } from 'react-bootstrap';

const Faqs = () => {
    return (
    <div className=' m-5 d-flex flex-column gap-5'>
      <h2>Preguntas frecuentes sobre comprar en RafaShop</h2>
     
        <Card>
          <Card.Header>
           
              ¿Cómo puedo realizar una compra en RafaShop?
            
          </Card.Header>
          
            <Card.Body>
              Para realizar una compra en RafaShop, simplemente sigue estos pasos:
              <ol>
                <li>Explora nuestra amplia selección de productos.</li>
                <li>Agrega los productos que deseas comprar al carrito de compras.</li>
                <li>Revisa los productos en tu carrito y procede a la página de pago.</li>
                <li>Proporciona la información de envío y realiza el pago.</li>
                <li>Confirma tu compra y recibirás una confirmación por correo electrónico.</li>
              </ol>
              ¡Disfruta de tu compra en RafaShop!
            </Card.Body>
         
        </Card>
        <Card>
          <Card.Header>
         
              ¿Cuáles son los métodos de pago aceptados en RafaShop?
           
          </Card.Header>
        
            <Card.Body>
              En RafaShop, aceptamos los siguientes métodos de pago:
              <ul>
                <li>Tarjetas de crédito y débito: Visa, Mastercard, American Express.</li>
                <li>PayPal.</li>
                <li>Transferencia bancaria.</li>
              </ul>
              Puedes seleccionar tu método de pago preferido durante el proceso de pago.
            </Card.Body>
         
        </Card>
        <Card>
          <Card.Header>
       
              ¿Puedo cancelar o modificar mi pedido después de realizarlo?
       
          </Card.Header>
       
            <Card.Body>
              Lamentablemente, una vez que hayas realizado tu pedido en RafaShop, no podemos garantizar la cancelación o modificación del mismo. Te recomendamos revisar cuidadosamente tu pedido antes de confirmarlo. Si tienes alguna inquietud, puedes comunicarte con nuestro equipo de atención al cliente para obtener asistencia.
            </Card.Body>
         
        </Card>
     
    </div>
  );
};

export default Faqs;