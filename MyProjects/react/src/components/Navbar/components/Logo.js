import React, { Component } from 'react'
import img from './img.png'

export default class Logo extends Component {
    render() {
        return (
            <div id="logo">
                <img src={img}/>
            </div>
        )
    }
}
