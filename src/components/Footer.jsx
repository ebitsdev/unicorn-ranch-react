import React, { Component } from 'react';
// Import only fontawesome to use the library from App.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {

    render() {
        return (
            <ul className="footer-content">
                <li><a href="https://github.com/ebitsdev"><FontAwesomeIcon icon={['fab', 'github']} /> Github</a></li>
                <li><a href="https://twitter.com/ebamba"><FontAwesomeIcon icon={['fab', 'twitter']}/> ebamba</a></li>
                <li><a href="https://linkedin.com/in/emmanuelbamba/"><FontAwesomeIcon icon={['fab', 'linkedin']}/> LinkedIn</a></li>
            </ul>
         );
    }
}

export default Footer;