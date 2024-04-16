import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <h1>facebook</h1>

            <div className="menu">
                <ul>
                    <li>
                        <a href="/">
                            <i className="fab fa-github"></i> Github
                        </a>

                    </li>
                    <li>
                        <a href="/">
                            <i className="fab fa-linkedin"></i> Linkedin
                        </a>
                    </li>
                </ul>

                <button className="btn">Profile</button>

            </div>

        </nav>
    );
}

export default Navbar;