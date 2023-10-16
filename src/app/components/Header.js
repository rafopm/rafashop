import React from 'react'
import Brand from './Brand'
import NavBar from './NavBar'
import TopBar from './TopBar'

const Header = () => {
    return (
        <>
            <TopBar />
            <Brand />
            <NavBar />
        </>
    )
}

export default Header