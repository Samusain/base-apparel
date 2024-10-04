import React from 'react'
import './Header.css'
import Img2 from '../../images/logo.svg'

const Header = () => {
    return(
        <div className='header'>
            <img src={Img2} alt="logo" className="logo"/>
        </div>
    )
}

export default Header;