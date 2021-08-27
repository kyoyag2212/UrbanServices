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
      });
      if( response.data.message=='registered')
      {
        return 1
      }
      else if( response.data.message=='Unique')
      {
        return 2
      }
      else {
        console.log(response.data.message)
        return 3
      }
    } catch (error) {
      console.log(error)
        return 3
    }


    
    
};

function Register() {
  const history = useHistory();
  const [uname, setuname] = useState("");
  const [pwd, setpwd] = useState("");
  const [email1, setemail1] = useState("");
  const [number, setnumber] = useState("");
  const [cnfrmpwd,setcnfrmpwd]=useState('');

  const OnSubmit=async ()=>{
    if( uname.length>4 && pwd.length>4 )
    {
    if(cnfrmpwd==pwd)
    {
      const response=await handleUserRegister(uname,pwd,email1,number)
      if(response==1)
      {
        toast.success("Registration Successful!")
        toast.success("Kindly Login")
        history.push('/login')
   
      }
      else if(response==2)
      {
        toast.error("Username Taken! Try Again")
      }
      else
      {
        toast.error("Registration Unsuccessful! Try Again")
      }
     }
    
    else
    {
      toast.error("Passwords Dont Match")

    }
  }
  else{
    toast.error("Username and Passwords must be atleast 5 character ")
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
            <div className="card1 bg-dark text-white">
              <div className="card-header">
                <h4 className="card-title text-center">Register</h4>
              </div>
              <div className="card-body">
                <form action="login" className="was-validated">
                  <div className="form-group" >
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
                      minLength='5'
                      required
                    />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">
                      Please fill out this field.Minimum 5 Characters.
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
                      minLength='5'
                    />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">
                      Please fill out this field.Minimum 5 Characters.
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
                      onChange={(e) => {
                        setcnfrmpwd(e.target.value);
                      }}
                      value={cnfrmpwd}
                      minLength='5'
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
                     minLength='10'
                      maxLength='10'
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
                    type="submit"
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <footer className="site-footer">
          <div className="container" style={{ overflowX: "hidden" }}>
            <div className="row">
              <div className="col-12 col-md-12">
                <img
                  src={logo}
                  className="img-fluid"
                  alt="Urban Services"
                  style={{ width: "120px" }}
                />
                <p className="text-justify mt-3">
                  We at Urban Services know that you and your beloved Home requires intensive care.We serve you the love and care that Your Home 
                  Derserves💙.We provide the best of services and service provides which makes your home a better place.
                </p>
              </div>
              <div className="col-12 col-md-3">
                <h6>Cities</h6>
                <ul className="footer-links">
                  <li>
                    <a >Goregaon</a>
                  </li>
                  <li>
                    <a >Mahim</a>
                  </li>
                  <li>
                    <a >Prabhadevi</a>
                  </li>
                  <li>
                    <a>Matunga</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-3">
                <h6>Services</h6>
                <ul className="footer-links">
                  <li>
                    <a href="/#services">Cleaning</a>
                  </li>
                  <li>
                    <a href="/#services">Plumbing</a>
                  </li>
                  <li>
                    <a href="/#services">Househelp</a>
                  </li>
                  <li>
                    <a href="/#services">Electrical Maintainence</a>
                  </li>
                  <li>
                    <a href="#/#services">Cooking</a>
                  </li>
                </ul>
              </div>
         
              <div className="col-12 col-md-3">
                <h6>Workspace</h6>
                <ul className="footer-links">
                  <li>
                   We reside in your Hearts,also you can find us at
                    Mumbai-400001.
                  </li>
                  <li>
                    <b>Phone: </b>
                    <a href="tel:9876543210">9876543210</a>
                  </li>
                  <li>
                    <b>Email: </b>
                    <a href="mailto:support@urbanclap.com">
                      support@urbanservices.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  © Copyright 2021 | Urban Services | All right reserved.
                </p>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li>
                    <a className="facebook" href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a className="youtube" href="#">
                      <i className="fa fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      
    </div>
    
  );
}
export default Register;
