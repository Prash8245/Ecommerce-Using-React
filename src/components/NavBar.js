import React, { useContext} from 'react';
import './mainstyle.css';
import logo from './My project-1 (1).png';
import {Link} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { Addalert } from './context/alertContext';

// NavBar Login Modal Components


export default function NavBar() {
    
const a = useContext(Addalert);

    return (
        <div>
            {/* Alert Message */}

            <Alert show= {a.alertShow} variant="success">
                <Alert.Heading>Item Added to cart</Alert.Heading>
            </Alert>

            {/* NavBar */}

            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <Link to="/home"><img
                        className="navbar-brand"
                        src={logo}
                        alt='logo'
                        width={'300px'}
                        height={'100px'}/></Link>
                    <div className='navTabs'>
                        <Link to="/home">
                            Home
                        </Link>
                        <Link to="/main">
                            Shop
                        </Link>
                        <a href='#myModal' data-bs-toggle="modal" data-bs-target="#myModal">
                            Login
                        </a>
                        <Link to="/cart">Cart</Link>
                    </div>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"/>
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            {/* Login Modals */}

            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div
                            className="modal-header"
                            style={{
                            backgroundColor: "#CC0D73"
                        }}>
                            <h4 className="modal-title text-center">Login</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div
                            className="modal-body text-start"
                            style={{
                            backgroundColor: "#FFB2A7"
                        }}>
                            <form action="#">
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter email"
                                        name="email"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd" className="form-label">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="pwd"
                                        placeholder="Enter password"
                                        name="pswd"/>
                                </div>
                                <div className="form-check mb-3">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" name="remember"/>
                                        Remember me
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-success">Login</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
