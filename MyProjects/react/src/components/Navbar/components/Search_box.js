import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Search_box extends Component {
    render() {
        return (
            <div>
                <input id="search-text" type="text"/>
                <NavLink to="/Search_result" id="search-button">Search</NavLink>
            </div>
        )
    }
}
