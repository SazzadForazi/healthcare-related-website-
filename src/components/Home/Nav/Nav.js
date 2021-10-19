import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';
import logo from '../../../../src/images/logodoctor.png'
const Nav = () => {
    return (
        <div className="MenuBar-container navbar navbar-expand-lg navbar fixed-top navbar-light bg-light">
            <div className="container">
                <div className="row">

                    <div className="col-md-2 ">

                        <div className="logo-img">
                            <img className="w-50" src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/services" className="items">
                                    <li>Services</li>
                                </Link>
                                <Link to="/doctors" className="items">
                                    <li>Doctors</li>
                                </Link>
                                <Link to="contact" className="items">
                                    <li>Contact us</li>
                                </Link>
                                <Link to="/blog" className="blog">
                                    <li>Blog</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;