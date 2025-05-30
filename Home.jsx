import React from 'react';
import "../styles/global.css";
import { ReactComponent as Play } from "../assets/play-circle.svg";
import bannerimg from "../assets/banner1.jpg";
import banner2 from "../assets/book-841171_1280.jpg";
import bannee3 from "../assets/student-7378904_1280.jpg";
import banner4 from "../assets/ai-generated-8947132_1280.jpg";

export default function Home() {
    return (
        <div className='home'>
            {/* Talk to us section starts here -------- */}
            <div className="bg-warning text-dark py-2 overflow-hidden" style={{ width: '100%', marginBottom: "3rem" }}>
                <div className="slide-left-to-right text-center">
                    <p className="m-0 mx-auto">
                        Are you a university or school student looking for an online tutoring partnership?
                        <span className="ms-2 text-primary" style={{ cursor: 'pointer' }}>
                            Talk to us
                        </span>
                    </p>
                </div>
            </div>
            {/* Talk to us section end here -------- */}

            <div className="container">
                {/* Desktop version (visible on large screens only) */}
                <div className="left-main-content row mt-4 d-none d-lg-flex">
                    <div className="col-lg-6 mt-4">
                        <p className="mobile-text-white pt-4 text-danger ">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        <h1 className='main-title fw-bold mx-auto'>Find Your Perfect Tutor</h1>
                        <p className='fs-5 mt-2'>We help you find perfect tutor for 1-on-1 lessons. <br /> It is completely free and private.</p>
                        <div className='mt-4'>
                            <button className='btn btn-warning me-3'>Get Started</button>
                            <Play style={{ fill: "#0000FF", width: "25px", height: "25px" }} />
                            <span className='ms-2 fs-6'>See how it works</span>
                        </div>
                    </div>

                    <div className="right-main-content col-lg-6 mt-4 position-relative">
                        <div className='circle-1'></div>
                        <div className='circle-2'></div>
                        <div className='circle-3'></div>

                        {/* Top row */}
                        <div className="d-flex mt-4 gap-3 mb-3">
                            <div style={{
                                width: "50%",
                                height: "220px",
                                overflow: "hidden",
                                borderTopLeftRadius: "50%",
                                borderBottomLeftRadius: "50%",
                            }}>
                                <img src={bannerimg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div style={{
                                width: "50%",
                                height: "220px",
                                overflow: "hidden",
                            }}>
                                <img src={banner2} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                        </div>

                        {/* Bottom row */}
                        <div className="d-flex gap-3">
                            <div style={{
                                width: "50%",
                                height: "220px",
                                overflow: "hidden",
                            }}>
                                <img src={bannee3} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div style={{
                                width: "50%",
                                height: "220px",
                                overflow: "hidden",
                                borderTopRightRadius: "50%",
                                borderBottomRightRadius: "50%",
                            }}>
                                <img src={banner4} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile version (visible only on small screens) */}
                <div className="mobile-banner d-block d-lg-none position-relative text-white text-center">
                    <div className="mobile-banner-overlay">
                        <p className='pt-4 text-danger'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        <h1 className='main-title fw-bold'>Find Your Perfect Tutor</h1>
                        <p className='fs-6'>We help you find perfect tutor for 1-on-1 lessons. <br /> It is completely free and private.</p>
                        <div className='mt-3'>
                            <button className='btn btn-warning me-2'>Get Started</button>
                            <Play style={{ fill: "#fff", width: "25px", height: "25px" }} />
                            <span className='ms-2 fs-6 text-white'>See how it works</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
