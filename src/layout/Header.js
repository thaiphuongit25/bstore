import React, { Component } from 'react';
import '../assets/header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a className="active" href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="#contact">Shop</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;
