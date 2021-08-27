import React,{useState} from 'react';
import Register from './Register';
import Home from './Home';
import logo from './assets/img/logo.png';
import img1 from './assets/img/home-service-1.png';
import img2 from './assets/img/home-service-2.jpg';
import {Router,Link, Route,useHistory} from 'react-router-dom';
import axios from 'axios'
import { toast } from "react-toastify";

const handlegetUserdetails=async (uname)=>{
  
  try {
    const response=await axios
    .post("http://localhost:4001/users/getdetails", {
      username: uname,
    })
    const user_id=await response.data.userData[0].user_id;
    console.log(user_id);
    localStorage.setItem("user_id", response.data.userData[0].user_id);
    localStorage.setItem("email", response.data.userData[0].email);
    localStorage.setItem("userphone", response.data.userData[0].u_phoneno);
    localStorage.setItem("usertype", response.data.userData[0].user_type);
    if(localStorage.getItem('usertype')=="SP")
    {
      localStorage.setItem("isvisible", "visible");

    }
    else{
    localStorage.setItem("isvisible", "invisible");
    }
    

    
   
  } catch (error) {
    console.log(error)
     
  }

}
const userloggedin=()=>{

  localStorage.setItem("userlogged","visible")
}




const handleUserLogin = async (uname, pwd) => {
  
 
  try {
    const response=await axios
    .post("http://localhost:4001/users/login", {
      username: uname,
      password: pwd,
    })
    if( response.data.message=='successful')
    {
      return true
    }
    else if(response.data.message=='incorrect')
    {
      return false
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

 function Login(){

     const history=useHistory();
     const [uname, setuname] = useState("");
     const [pwd, setpwd] = useState("");
     
     
     const OnSubmit=async ()=>{
    
      const response=await handleUserLogin(uname,pwd)
      if(response)
      {
        toast.success("Login Successful!")
        handlegetUserdetails(uname);
        userloggedin();
        localStorage.setItem("username", uname);
        history.push('/search')
   
      }
      else
      {
        toast.error("Login UnSuccessful! Try Again")
      }
     }

     return(
     <div>
        <title>Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <nav className="navbar  navbar-expand-lg navbar-dark justify-content-center" style={{background:'black'}}>
          <ul className="navbar-nav">
            <li className="nav-item">
            
              <a className="navbar-brand" href="/">
                <img src={logo} alt="logo" style={{width: '40px'}} />
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
              <img className="img-fluid float-left" src={img1}/>
            </div>
            <div className="col">
            
              <div className="card1 bg-dark text-white">
                <div className="card-header"> 
                  <h4 className="card-title text-center">Login</h4></div>
                <div className="card-body">

                
                    
                    

                  <form action="login" className="was-validated">
                    <div className="form-group">
                      <label htmlFor="uname">Username:</label>
                      <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname"  onChange={(e) => {
                        setuname(e.target.value);
                      }}
                      value={uname} required />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="pwd">Password:</label>
                      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"  onChange={(e) => {
                        setpwd(e.target.value);
                      }}
                      value={pwd} required />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>

                   
                   
                  </form> 
                  
                </div>
                
                <div><button type="button" className="btn11 btn-primary btn-block" onClick={()=>OnSubmit()}>Login</button></div>
                
                <div><button type="button" className="btn1 btn-primary btn-block" onClick={()=>history.push('/register')}>New? Register</button></div>
                
              </div>
              
              
            </div>
            
            <div className="col">
              <img className="img-fluid float-right" src={img2} />
            </div>
          </div>
        </div>
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
        
            </div>
          </div>
        </footer>
      </div>);
         
     
 };
 export default Login