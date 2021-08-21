import React,{useState} from "react";
import logo from "./assets/img/logo.png";
import img1 from "./assets/img/home-service-1.png";
import img2 from "./assets/img/home-service-2.jpg";
import { Router, Link, Route, useHistory } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";

const handleUserRegister = async (uname, pwd, email1, number) => {
  
 
    try {
      const response=await axios
      .post("http://localhost:4001/users/create", {
        username: uname,
        password: pwd,
        user_type: "User",
        email: email1,
        u_phoneno: number,
      })
      if( response.data.message=='registered')
      {
        return true
      }
      else {
        console.log(response.data.message)
        return false
      }
    } catch (error) {
      console.log(error)
        return false
    }


    
    
};

function Register() {
  const history = useHistory();
  const [uname, setuname] = useState("");
  const [pwd, setpwd] = useState("");
  const [email1, setemail1] = useState("");
  const [number, setnumber] = useState("");

  const OnSubmit=async ()=>{
    
   const response=await handleUserRegister(uname,pwd,email1,pwd)
   if(response)
   {
     toast.success("Registration Successful!")
     toast.success("Kindly Login")
     history.push('/login')

   }
   else
   {
     toast.error("Registration UnSuccessful! Try Again")
   }
  }

  return (
    <div>
      <title>Login</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <nav
        className="navbar  navbar-expand-lg navbar-dark justify-content-center"
        style={{ background: "black" }}
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo" style={{ width: "40px" }} />
            </a>
          </li>
        </ul>
        <a className="navbar-brand" href="/">
          <h1 className="display-5">Urban Services</h1>
        </a>
      </nav>
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img className="img-fluid float-left" src={img1} />
          </div>
          <div className="col">
            <div className="card bg-dark text-white">
              <div className="card-header">
                <h4 className="card-title text-center">Register</h4>
              </div>
              <div className="card-body">
                <form action="login" className="was-validated">
                  <div className="form-group">
                    <label htmlFor="uname">Username:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="uname"
                      placeholder="Enter username"
                      name="uname"
                      onChange={(e) => {
                        setuname(e.target.value);
                      }}
                      value={uname}
                      required
                    />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">
                      Please fill out this field.
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="pwd"
                      placeholder="Enter password"
                      name="pswd"
                      onChange={(e) => {
                        setpwd(e.target.value);
                      }}
                      value={pwd}
                      required
                    />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">
                      Please fill out this field.
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cnfrmpwd">Confirm Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="cnfrmpwd"
                      placeholder="Renter password"
                      name="cnfrmpswd"
                      required
                    />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">
                      Please fill out this field.
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email1">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email1"
                      placeholder="Enter Email"
                      name="email1"
                      onChange={(e) => {
                        setemail1(e.target.value);
                      }}
                      value={email1}
                      required
                    />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">
                      Please fill out this field.
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phoneno">Phone:</label>
                    <input
                      type="phone"
                      className="form-control"
                      id="number"
                      placeholder="Enter phone"
                      name="number"
                      onChange={(e) => {
                        setnumber(e.target.value);
                      }}
                      value={number}
                      required
                    />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">
                      Please fill out this field.
                    </div>
                  </div>
                </form>
              </div>
              <div>
                <div>
                  <button
                    type="button"
                    className="btn2 btn-primary btn-block"
                    onClick={() =>OnSubmit()}
                  >
                    {}
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <img className="img-fluid float-right" src={img2} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
