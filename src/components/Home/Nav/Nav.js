import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';
import logo from '../../../../src/images/logodoctor.png'
import useAuth from '../../../hooks/useAuth';
const Nav = () => {
    const { user, logOut } = useAuth()
    return (
        <div className="MenuBar-container navbar-expand-lg navbar navbar-expand-lg navbar fixed-top navbar-light bg-light">
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
                                <Link to="/contact" className="items">
                                    <li>Contact us</li>
                                </Link>
                                <Link to="/blog" className="items">
                                    <li>Blog</li>
                                </Link>
                                {user?.email ?
                                    <Link to='/login'>
                                        <button onClick={logOut} className='btn btn-warning me-2'>Log Out</button>
                                    </Link>

                                    :
                                    <Link to='/login'>
                                        <button className='btn btn-warning me-2'>Log In</button>
                                    </Link>
                                }
                                <div>
                                    <h5>{user.displayName}</h5>
                                </div>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;