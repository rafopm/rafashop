'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Styles from '../styles/TopBar.module.css'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import LoginButton from './LoginButton'
import LoginForm from './LoginForm'

const TopBar = () => {
    const [showForm, setShowForm] = useState(false);
    const openForm = () => {
        setShowForm(true);
    };

    const handleClose = () => {

        // getPosts().then((response) => {
        //     setPosts(response.data);
        // });

        setShowForm(false);
    };
    return (
        <div className={Styles.container}>
            <div className={Styles.links}>
                <Link href='/about'>Nosotros</Link>
                <Link href='/contact'>Contacto</Link>
                <Link href='/faqs'>FAQs</Link>

            </div>

            <div className={Styles.linksAccount}>
                <div >
                    <LoginButton onClick={openForm} />
                    {showForm && <LoginForm onClose={handleClose} />}
                </div>
                <Link href='/'>USD</Link>
                <Link href='/'>ENG</Link>
                <span><FaHeart /> 0 </span>
                <span><FaShoppingCart /> 0 </span>
            </div>


        </div>
    )
}

export default TopBar