import React, { Component } from 'react'
import Search_box from './components/Search_box.js'
import Menu from './components/Menu.js'
import Logo from './components/Logo.js'
import BurgerMenu from './components/BurgerMenu'

export default class Navbar extends Component {
    render() {
        return (
            <nav id="navbar">
                <Logo></Logo>
                <Search_box/>
                <Menu/>
                <BurgerMenu/>
            </nav>
        )
    }
}
