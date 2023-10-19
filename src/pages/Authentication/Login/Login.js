import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../../assets/images/index'

export default function Login() {
  return (
    <>
      <div className="container mt-5">
        <div className="row my-3">
          <div className="col">
            <div className="d-flex justify-content-center">
              <img src={images.logo} alt="logo" style={{ width: "10rem" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 contactForm">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="box bg-white button1 p-5 rounded">
              <div className="text-center">
                <h3>Login</h3>
                <p style={{ fontSize: "14px" }}>Welcome Back</p>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control rounded-pill text-secondary" id="email" placeholder="Enter email" />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">

                <div className="col-12 col-md-8 col-lg-8">
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control rounded-pill text-secondary" id="password" placeholder="Enter password" />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-3">

                <div className="col-8  col-md-4 col-lg-4">
                  <div className="form-check">
                    <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label " htmlFor="flexCheckDefault " style={{ fontSize: "14px" }}>
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col-8  col-md-4 col-lg-4">
                  <div className="form-check">

                    <label className="form-check-label " htmlFor="flexCheckDefault " style={{ fontSize: "14px" }}>
                      <Link to={"/auth/forgetpassword"}>ForgetPassword</Link>
                    </label>
                  </div>
                </div>

              </div>
              <div className="row justify-content-center mb-3">
                <div className="col-12 col-md-8 col-lg-8">
                  <Link to={"/"} className="btn btn-primary text-white rounded-pill button1 w-100">LOGIN</Link>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <p>New User? <Link to={"/auth/register"}>Create An Account</Link></p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
