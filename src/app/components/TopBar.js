'use client'
import Link from 'next/link'
import React from 'react'
import Styles from '../styles/TopBar.module.css'
import {FaHeart,FaShoppingCart} from 'react-icons/fa'

const TopBar = () => {


    return (
        <div className={Styles.container}>
            <div className={Styles.links}>
                <Link href='/'>About</Link>
                <Link href='/'>Contact</Link>
                <Link href='/'>Help</Link>
                <Link href='/'>FAQs</Link>

            </div>

            <div className={Styles.linksAccount}>
                <Link href='/'>Login</Link>
                <Link href='/'>USD</Link>
                <Link href='/'>ENG</Link>
                <span><FaHeart /> 0 </span>
                <span><FaShoppingCart /> 0 </span>
            </div>


        </div>
    )
}

export default TopBar