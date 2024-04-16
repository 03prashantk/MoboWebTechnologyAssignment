import React from 'react';
import './Navbar.scss';

const Navbar = () => {

    const openWebpage = () => {
        window.open('https://enally.in', '_blank');
    }

    return (
        <nav>
            <h1>facebook</h1>

            <div className="menu">
                <ul>
                    <li>
                        <a href="https://github.com/03prashantk/MoboWebTechnologyAssignment">
                            <i className="fab fa-github"></i> Github
                        </a>

                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/03prashantpk">
                            <i className="fab fa-linkedin"></i> Linkedin
                        </a>
                    </li>
                </ul>

                <button className="btn" onClick={openWebpage}>Website</button>

            </div>

        </nav>
    );
}

export default Navbar;