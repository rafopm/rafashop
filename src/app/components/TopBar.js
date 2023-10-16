'use client'
import Link from 'next/link'
import React from 'react'
import Styles from '../styles/TopBar.module.css'
import {FaHeart,FaShoppingCart} from 'react-icons/fa'
import LoginButton from './LoginButton'

const TopBar = () => {


    return (
        <div className={Styles.container}>
            <div className={Styles.links}>
                <Link href='/about'>Nosotros</Link>
                <Link href='/contact'>Contacto</Link>
                <Link href='/faqs'>FAQs</Link>

            </div>

            <div className={Styles.linksAccount}>
                <div > <LoginButton /> </div>
                <Link href='/'>USD</Link>
                <Link href='/'>ENG</Link>
                <span><FaHeart /> 0 </span>
                <span><FaShoppingCart /> 0 </span>
            </div>


        </div>
    )
}

export default TopBar