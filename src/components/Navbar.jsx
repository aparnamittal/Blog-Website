import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt='' />
                </div>
                <div className="link">
                    <Link className='link' to="/?cat=art"><h6>BLOG</h6></Link>
                </div>
                <div className="link">
                    <Link className='link' to="/?cat=design"><h6>DESIGN</h6></Link>
                </div>
                <div>
                <Link className='link' to='/Login'>Login</Link>
                </div>
                <span className="write">
                    <Link className='link' to="/write">Write</Link>
                </span>
            </div>
        </div>
    )
}

export default Navbar
