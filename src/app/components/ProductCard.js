import Card from 'react-bootstrap/Card';
import Rating from './Rating';
import Styles from '../styles/ProductCard.module.css'
import { convertToPath } from "../lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSyncAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ProductCard = ({ item, showAs, qty }) => {
    const generateWhatsAppLink = () => {
        const number = "51123456789";
        const url = `https://wa.me/${number}?text=${encodeURIComponent(
          `¡Hola! Estoy interesad@ en el producto ${item.title} que vi en tu sitio web. ¿Me puedes proporcionar más información? ${window.location.href}`
        )}`;
        window.open(url, "_blank");
      };


    if (showAs === "Page") {
        return (
            <>

                <div>
                    <div >
                        <div >
                            {/* <Card.Img variant="top" src={item.image}  /> */}
                        </div>

                        <div >
                            <div >
                                <h2>{item.title}</h2>
                            </div>
                            <div >
                                <div>{item.price}</div>
                            </div>
                            <div >
                                <h2>Pídelo por Whatsapp</h2>
                                <button
                                    onClick={generateWhatsAppLink}
                                    
                                >
                                    Icono de Whatsapp
                                </button>
                            </div>
                        </div>
                    </div>
                    <br></br>
                </div>
            </>
        );
    }

    if (showAs === "ListItem") {
        return (
            <Card style={{ maxWidth: '350px', padding: "20px" }} >
                <div>
                    <Card.Img variant="top" src={item.image} />
                </div>
                <div>
                    <h3>
                        <div>{item.title}</div>
                    </h3>

                    <div>{item.price}</div>
                    {qty === 0 ? "" : <div>{qty} units</div>}
                    {qty === 0 ? "" : <div>Subtotal: ${qty * item.price}</div>}
                </div>
            </Card>
        );
    }

    return (
        <Card style={{ maxWidth: '350px', padding: "20px" }} >
            <div className={Styles.imageContainer}>
                <Card.Img variant="top" src={item.image} className={Styles.image} />
                <div className={Styles.productAction}>
                    <a className="btn btn-outline-dark btn-square" href="">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </a>
                    <a className="btn btn-outline-dark btn-square" href="">
                        <FontAwesomeIcon icon={faHeart} />
                    </a>
                    {/* <a className="btn btn-outline-dark btn-square" href="">
                                    <FontAwesomeIcon icon={faSyncAlt} />
                                </a> */}
                    <Link className="btn btn-outline-dark btn-square" href={`/shop/${convertToPath(item.title)}-${item.id}`}>
                        <FontAwesomeIcon icon={faSearch} />
                    </Link>
                </div>
            </div>
            <Card.Body className='text-center'>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    <span>$ {item.price}</span>
                    <span>
                        <Rating rate={item.rating.rate} />
                    </span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProductCard