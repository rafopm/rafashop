'use client'
import React from 'react'
import Styles from '../styles/Brand.module.css'
import { FaSearch } from 'react-icons/fa';


const Brand = () => {
    const handleSearch = (event) => {
        const searchTerm = event.target.value;
       
        //console.log('Buscar productos con el término:', searchTerm);
    };

    return (
        <div className={Styles.container}>
            <div className={Styles.brand}><span className={Styles.first}>RAFA</span><span className={Styles.second}>SHOP</span></div>
            <div className={Styles.search}>
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    onChange={handleSearch}
                />
                <FaSearch className={Styles.searchIcon} />

            </div>
            <div className={Styles.contact}>
                <span className={Styles.service}>Servicio al cliente</span>
                <span className={Styles.phone}>+51 123 456 789</span>
            </div>
        </div>
    )
}

export default Brand