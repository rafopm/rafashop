import React from 'react'
import { FaCheck, FaShippingFast, FaExchangeAlt, FaPhoneVolume } from 'react-icons/fa';

const data = [
    { icon: FaCheck, text: 'Calidad' },
    { icon: FaShippingFast, text: 'Envío Gratis' },
    { icon: FaExchangeAlt, text: 'Retorno 14 días' },
    { icon: FaPhoneVolume, text: 'Soporte 24/7' },
];

const Featured = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="d-flex row flex-wrap px-xl-5 pb-3">
                {data.map((item, index) => (
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1 " key={index}>
                        <div className="d-flex align-items-center justify-content-center bg-light mb-4 gap-2" style={{ padding: '30px' }}>
                            <h1 className="m-0 mr-3"><item.icon style={{ color: '#FFD333' }}/></h1>
                            <h5 className="font-weight-semi-bold m-0">{item.text}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Featured