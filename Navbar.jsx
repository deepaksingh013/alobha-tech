import React, { useState } from 'react';
import { ReactComponent as Logo } from "../assets/laptop.svg";
import "../styles/global.css"
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigationPages = ["Home", "For Students", "Resources", "About Us", "Contact Us"];

    return (
       <div className="container pt-2 pb-2 pt-lg-4 pb-lg-4">
            <header className="main-navbar text-white p-2 d-flex align-items-center justify-content-between gap-2">
                {/* Logo */}
                <div className="d-flex align-items-center">
                    <Logo style={{ color:"blue", width: "35px", height: "35px" }} />
                    <span className='text-black ms-2 fw-bold'>Tutor</span>
                </div>

                {/* Navigation - Desktop */}
                <div className="d-none d-md-flex">
                    {navigationPages.map((item, index) => (
                        <a key={index} className={`main-anchor ${index === 0 ?"text-warning" : "text-dark"} me-3 text-decoration-none fw-semibold`} href="#">{item}</a>
                    ))}
                </div>

                {/* Buttons - Desktop */}
                <div className="d-none d-md-flex">
                    <button className='btn btn-light me-3'>Sign In</button>
                    <button className='btn btn-primary'>Register</button>
                </div>

                {/* Hamburger - Mobile */}
                <div className="d-md-none">
                    <button className="btn btn-outline-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        &#9776;
                    </button>
                </div>

                {/* Slide Menu - Mobile */}
                <div className={`mobile-menu position-fixed top-0 end-0 bg-white h-100 p-4 shadow ${isMenuOpen ? 'open' : ''}`} style={{ width: '250px', transition: 'transform 0.3s ease-in-out', transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)', zIndex: 1050 }}>
                    <button className="btn btn-close mb-4" onClick={() => setIsMenuOpen(false)}></button>
                    {navigationPages.map((item, index) => (
                        <a key={index} className='d-block text-dark mb-3 fw-semibold text-decoration-none' href="#">{item}</a>
                    ))}
                    <button className='btn btn-light w-100 mb-2'>Sign In</button>
                    <button className='btn btn-primary w-100'>Register</button>
                </div>
                {isMenuOpen && (
                    <div className="position-fixed top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1040 }} onClick={() => setIsMenuOpen(false)}></div>
                )}
            </header>
        </div>
    );
}
