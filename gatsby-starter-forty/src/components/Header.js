import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../assets/images/LuxFloors.png'

const Header = (props) => (
    <header id="header" className="alt">
        <h1 className="hidden" >Lux Floors</h1>
        <Link to="/" className="logo"><img src={logo} alt="Lux Floors Logo" /></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
