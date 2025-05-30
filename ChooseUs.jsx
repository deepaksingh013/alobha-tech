import React from 'react'
import { ReactComponent as Icon1 } from "../assets/people-fill.svg";
import { ReactComponent as Icon2 } from "../assets/clock-fill.svg";
import { ReactComponent as Icon3 } from "../assets/credit-card-2-front.svg";
import { ReactComponent as Icon4 } from "../assets/tag-fill.svg";
import ContentImg from "../assets/ai-generated-8966392_1280.jpg"
import note from "../assets/art-1851483_1280.jpg"
import bottom1 from "../assets/confident-2362133_1280.jpg"
import bottom2 from "../assets/girl-8802165_1280.png"
import {ReactComponent as s1} from "../assets/nut-fill.svg"
import {ReactComponent as s2} from "../assets/translate.svg"
import {ReactComponent as s3} from "../assets/flask-fill.svg"
import {ReactComponent as s4} from "../assets/eye-fill.svg"



export default function ChooseUs() {

    const serviceCardData = [
        {
            Icon: Icon1,
            title: "One-on-one Teaching",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, molestias."
        },
        {
            Icon: Icon2,
            title: "24/7 Tutor Availability",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, molestias."
        },
        {
            Icon: Icon3,
            title: "Interactive Whiteboard",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, molestias."
        },
        {
            Icon: Icon4,
            title: "Affordable Prices",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, molestias."
        }
    ];

    const classContent = [{
        Icon: s1,
        name: "Engineering"
    },
    {
        Icon: s2,
        name: "Programming"
    },
    {
        Icon: s3,
        name: "Languages"
    },
    {
        Icon: Icon4,
        name: "Science"
    },
    {
        Icon: Icon4,
        name: "History"
    },
    {
        Icon: s1,
        name: "Psycology"
    },
    {
        Icon: Icon4,
        name: "Web Design"
    },
    {
        Icon: s4,
        name: "See all"
    }

    ]

    return (
        <div className="container" style={{ marginTop: "3rem" }}>
            <h3 className="text-center text-danger">Why Choose Us</h3>
            <h1 className="mt-4 fw-bold text-center mx-auto">Benefits With Online Tutoring <br /> Services With Us</h1>

            {/* Service cards in a single row */}
            <div className="row mt-4">
                {serviceCardData.map((item, index) => (
                    <div key={index} className="mt-2 col-sm-12 col-md-6 col-lg-3">
                        <div className="card-main-content mt-4 card shadow h-100 p-4 pb-0">
                            <item.Icon style={{ width: "30px", height: "30px", fill: "#712cf9" }} />
                            <h6 className="mt-2 fw-bold">{item.title}</h6>
                            <p className="text-muted mt-2 card-text">{item.content}</p>
                        </div>
                    </div>
                ))}


                {/* content section satrt fro here */}
                <div className='choose-us-content  pt-4' style={{marginTop:"6rem"}}>
                    <div className='row d-flex justify-content-between align-items-center alig mt-4 pt-2 '>
                        <div className='d-flex col-lg-4 position-relative'>
                            <img className='img-1' src={ContentImg} alt="" />
                            <img src={note} className='img-2' alt="" />
                        </div>
                        <div className='content-first col-lg-7'>
                            <p className='text-danger mx-auto'>CUSTMISE WITH YOUR SCHEDULE</p>
                            <h2 className='fw-bold'>Personalised Professional <br /> Online Tutor on Your Schedule</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa et corrupti harum nam ex laboriosam autem repellendus, ad voluptas, quaerat blanditiis recusandae, unde voluptate assumenda doloremque praesentium reprehenderit quisquam impedit qui eligendi fugit? In saepe ratione et veritatis deleniti temporibus repudiandae fugit, deserunt odit maiores aliquam, molestias iste nesciunt. Possimus vel sunt ratione exercitationem esse ut assumenda odio neque porro facere! Totam, natus placeat? Libero officia accusamus quia perferendis recusandae sunt error assumenda sequi, atque asperiores, distinctio aut tempore eligendi!</p>
                            <button className='btn btn-warning'>Get Started</button>
                        </div>
                    </div>
                    <div className='bottom-second' style={{marginTop:"6rem"}}>
                         <div className='row pt-4' style={{ marginTop: "4rem !important" }}>
                        {/* Image section - show first on mobile, second on desktop */}
                        <div className='main-con-2 col-lg-5 order-1 order-lg-2 position-relative'>
                            <img className='img-3' style={{ borderRadius: "20px" }} src={bottom1} alt="" />
                            <img className='img-4' src={bottom2} alt="" />
                        </div>

                        {/* Text content - show second on mobile, first on desktop */}
                        <div className='content-second col-lg-7 order-2 order-lg-1'>
                            <p className='text-danger'>CUSTOMISE WITH YOUR SCHEDULE</p>
                            <h2 className='fw-bold'>
                                Talented and Qualified <br /> Tutor To Serve You For Help
                            </h2>
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis atque tenetur doloribus sapiente suscipit rem ducimus neque pariatur consequatur? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, accusamus? Lorem ipsum dolor sit amet.
                            </p>
                            <button className='btn btn-warning'>Get Started</button>
                        </div>
                    </div>
                    </div>
                   

                </div>


                {/* tutotor small card section start here */}
                <div className='class-card mt-4 row container'>
                    <div className='mt-4'>
                        <p className='mt-4 text-center text-danger'>OUR TUTOR PROJECT</p>
                        <h3 className='mt-2 text-center fw-bold'>Find Online Tutor in Any Subject</h3>
                    </div>
                    {classContent.map((item, index) => (
                        <div key={index} className="mt-2 mb-2 col-sm-6 col-md-4 col-lg-3">
                            <div className="w-100 card-main-content mt-4 card shadow h-100 p-4 pb-0">
                                {/* Wrap icon and text in a row */}
                                <div className="d-flex align-items-center gap-2">
                                    <item.Icon style={{ width: "30px", height: "30px", fill: "#712cf9" }} />
                                    <h6 className="fw-bold">{item.name}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
