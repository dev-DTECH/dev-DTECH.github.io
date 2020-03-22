import React, { Component } from 'react'
import Search_box from './components/Search_box.js'
import Menu from './components/Menu.js'
import Logo from './components/Logo.js'

export default class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <Logo></Logo>
                <Search_box/>
                <Menu/>
            </div>
        )
    }
}
