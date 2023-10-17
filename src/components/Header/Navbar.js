import React from 'react'
import { images } from '../../assets/images'
export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#"> <img src={images.logo}/>   </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">AboutUs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Doctors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacts</a>
              </li>
              
            </ul>
            <div className="d-flex">
                <button type='button' className="btn btn-outline text-primary">Signin</button>
                <button type='button' className="btn btn-outline-primary">GET STARTED</button>
                
            </div>
          </div>
        </div>
      </nav>


    </>
  )
}
