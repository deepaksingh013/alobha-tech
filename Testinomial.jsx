import React from 'react';
import review1 from "../assets/colorful-sweater-7974555_1280.jpg";

export default function Testinomial() {
    return (
        <>
        <div className="container  mt-4">
            <p className='text-center text-danger ' style={{marginTop:"4rem"}}>OUR TESTIMONIALS</p>
            <h2 className='text-center fw-bold'>What Our Students Say About Us</h2>

            {/* Image Row */}
            <div className='mt-4 d-flex justify-content-center align-items-center gap-3 flex-wrap'>
                <img
                    src={review1}
                    alt=""
                    className="rounded-circle object-fit-cover"
                    style={{ height: "60px", width: "60px" }}
                />
                <img
                    src={review1}
                    alt=""
                    className="rounded-circle object-fit-cover border border-primary"
                    style={{ height: "90px", width: "90px" }}
                />
                <img
                    src={review1}
                    alt=""
                    className="rounded-circle object-fit-cover"
                    style={{ height: "60px", width: "60px" }}
                />
            </div>

            {/* Text Content */}
            <div className="text-center mt-4 px-3">
                <h2 className='fw-bold'>Albert Monica</h2>
                <h5 className='text-muted'>Student at Cambridge</h5>
                <p
                    className='text-muted mx-auto'
                    style={{
                        maxWidth: "600px",
                        marginTop: "1.5rem",
                        lineHeight: "1.6",
                        fontSize: "1rem",
                        position: "relative",
                        padding: "0 1rem"
                    }}
                >
                    <span style={{
                        fontSize: "2rem",
                        color: "#ccc",
                        position: "absolute",
                        left: 0,
                        top: "-0.5rem"
                    }}>“</span>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facere quos maxime, deleniti minima ab! Lorem ipsum dolor sit amet.

                    <span style={{
                        fontSize: "2rem",
                        color: "#ccc",
                        position: "absolute",
                        right: 0,
                        bottom: "-0.5rem"
                    }}>”</span>
                </p>

            </div>

        </div>
                    <div style={{height:"30px", background:"blue", marginTop:"3rem"}}>

            </div>
            </>
    );
}
