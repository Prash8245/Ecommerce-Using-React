import React from 'react';
import { Link } from "react-router-dom";
import './mainstyle.css';

export default function Sidebar() {
  return (
    <div>
        <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="side">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <h5 className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span id='head' className="fs-5 d-none d-sm-inline" >Category</span>
                </h5>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link to="/all" className="nav-link align-middle px-0">
                            <span className="ms-1 d-none d-sm-inline">All</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/electronic" className="nav-link px-0 align-middle">
                            <span className="ms-1 d-none d-sm-inline">Electronics</span></Link>
                    </li>
                    <li>
                        <Link to="/jewelery" className="nav-link px-0 align-middle">
                            <span className="ms-1 d-none d-sm-inline">Groceries & <br />Furniture</span> </Link>
                    </li>
                    <li>
                        <Link to="/mens" className="nav-link px-0 align-middle">
                            <span className="ms-1 d-none d-sm-inline">Men</span> </Link>
                    </li>
                    <li>
                        <Link to="/womens" className="nav-link px-0 align-middle">
                            <span className="ms-1 d-none d-sm-inline">Women</span> </Link>
                    </li>
                    <li>
                        <Link to="/access" className="nav-link px-0 align-middle">
                            <span className="ms-1 d-none d-sm-inline">Accessories</span> </Link>
                    </li>
                    <li>
                        <Link to="/decor" className="nav-link px-0 align-middle">
                            <span className="ms-1 d-none d-sm-inline">Decoration</span> </Link>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
        
    </div>
</div>
    </div>
  );
}
