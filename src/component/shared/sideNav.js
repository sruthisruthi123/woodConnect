import React, { useState } from 'react';
import './sideNav.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
//const AccordionMenu = () => {


const SideNav = () => {
    const [openSection, setOpenSection] = useState(null); // State to track which section is open

    // Toggle function for accordion sections
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section); // Toggle open/close
    };
    return (
        <div className="navbar">
            <nav className="sidebar">


                <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <NavLink
                            to="/dashboard"
                            className="nav-link"
                            activeClassName="active" // Automatically adds the active class
                            exact
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <a
                            className="menu-header"
                            onClick={() => toggleSection('product')}
                        >

                            Product
                            <FontAwesomeIcon icon={faChevronDown} className={openSection === 'product' ? 'rotate' : 'product'} />
                        </a>
                        {openSection === 'product' && (
                            <ul className="submenu">
                                <li><NavLink
                                    to="/product"
                                    className="nav-link"
                                    activeClassName="active" // Automatically adds the active class
                                    exact
                                >Product</NavLink></li>
                                <li><NavLink
                                    to="/add-product"
                                    className="nav-link"
                                    activeClassName="active" // Automatically adds the active class
                                    exact
                                >Add product</NavLink></li>
                            </ul>
                        )}


                    </li>
                    <li className="sidebar-item">
                        <NavLink
                            to="/driver"
                            className="nav-link"
                            activeClassName="active" // Automatically adds the active class
                            exact
                        >
                            Driver
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <a href="/logout">Logout</a>
                    </li>
                </ul>

            </nav>
        </div>
    );
};
//}
export default SideNav;
