import React, { Component } from 'react';

class  Header extends Component {
    render() {
        return (
            <ul className="header-content">
                <li><a href="/">Home</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">About Us</a></li>
            </ul>
         );
    }
}

export default Header;
