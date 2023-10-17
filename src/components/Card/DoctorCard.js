import React from 'react'

export default function DoctorCard(props) {
    const {Image, name, category} =props
    return (
        <>
        <div className="cards-1">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-blog">
                            <div className="card-image">
                                <a href="#"> <img className="img" src={Image} /> </a>
                                <div className="ripple-cont"></div>
                            </div>
                            <div className="table">
                                <h4> {name} <i className="fa-solid fa-star ms-3" style={{color: "#e09b06"}}></i> 4.9(250)</h4>
                                <p className="">{category} </p> <br />
                                <p className="my-3 text-body-tertiary"><i className="fa-solid fa-location-dot"></i> Henderson, Colorado |</p>
                                <div className='text-center my-3'>
                                        <button type="button" className="btn btn-primary rounded-pill px-5 button1 ">BOOK DOCTOR</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        </>
    )
}
