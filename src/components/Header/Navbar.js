import React from 'react'
import { images } from '../../assets/images'
import { Link } from 'react-router-dom'
export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light">
        <div className="container">
          <Link to={'/'} className="navbar-brand" > <img src={images.logo}/>   </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" >About Us</Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link" >Pages</Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link" >Doctors</Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link" >Contacts</Link>
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
