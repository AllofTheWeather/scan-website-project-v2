import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ContactUs } from "./ContactForm";

import Footer from "./Footer";

const ModalForm = () => {
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Quick Enquiry</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <ContactUs />
            </div>
            </div>
        </div>
        </div>

    )
}

const Nav = () => {
    return (
    <nav className="navbar-nav sticky-top">
        <ul className="nav nav-tabs">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Homepage</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/services" role="button" aria-expanded="false">Our Services</a>
            <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/services/1">Service 1</a></li>
            <li><a className="dropdown-item" href="/services/2">Another action</a></li>
            <li><a className="dropdown-item" href="/services/3">Something else here</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/services/4">Separated link</a></li>
            </ul>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
        </li>
        </ul>
    </nav>
    )
}

export const App = () => {
    return (
        <div id="app">
                <header className="container bg-white">
                        <div className="navbar">
                            <div>
                                <h1><NavLink path="/">SiteScan</NavLink></h1>                         
                                <h2><NavLink path="/">on demand industrial site scans</NavLink></h2>
                            </div>
                            <div className="p-3">

                                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                    </svg>
                                </button>
                                
                                <ModalForm />
                            </div>
                        </div>
                        <Nav />
                </header>
                
                <Outlet />

                <Footer />
        </div>
    )
}