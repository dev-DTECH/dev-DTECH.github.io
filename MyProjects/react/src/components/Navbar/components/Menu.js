import React, { Component } from "react";
import  {NavLink}  from "react-router-dom";
export default class Menu extends Component {
	render() {
		return (
			<div id="menu">
				<NavLink exact to="/">
					Home
				</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/login">Login</NavLink>
			</div>
		);
	}
}
