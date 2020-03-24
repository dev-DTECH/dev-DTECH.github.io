import React, { Component } from 'react'

export default class BurgerMenu extends Component {
    render() {
        return (
            <div id="burger-menu" onclick="toggleMenu()">
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}
