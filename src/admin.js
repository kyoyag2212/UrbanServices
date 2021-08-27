import React,{useState} from 'react';
import Register from './Register';
import Home from './Home';
import logo from './assets/img/logo.png';
import img1 from './assets/img/admin1.jpg';
import img2 from './assets/img/admin2.jpg';
import {Router,Link, Route,useHistory} from 'react-router-dom';
import axios from 'axios'
import { toast } from "react-toastify";


const userloggedin=()=>{

  localStorage.setItem("adminlogged","visible")
}




const handleAdminLogin = async (uname, pwd) => {
  
 
  try {
    const response=await axios
    .post("http://localhost:4001/users/adminlogin", {
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

 function AdminLogin(){

     const history=useHistory();
     const [uname, setuname] = useState("");
     const [pwd, setpwd] = useState("");
     localStorage.setItem("adminlogged","invisible")
     
     
     
     const OnSubmit=async ()=>{
    
      const response=await handleAdminLogin(uname,pwd)
      if(response)
      {
        toast.success("Login Successful!")
  
        userloggedin();
        history.push('/adminpanel')
   
      }
      else
      {
        toast.error("Login Unsuccessful! Try Again")
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
                  <h4 className="card-title text-center">Admin Login</h4></div>
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
                
              
              </div>
              
              
            </div>
            
            <div className="col">
              <img className="img-fluid float-right" src={img2} />
            </div>
          </div>
        </div>
      </div>);
         
     
 };
 export default AdminLogin