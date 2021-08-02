import React from 'react';
import Register from './Register';
import Home from './Home';
import logo from './assets/img/logo.png';
import img1 from './assets/img/home-service-1.png';
import img2 from './assets/img/home-service-2.jpg';
import {Router,Link, Route,useHistory} from 'react-router-dom';

 function Login(){
     const history=useHistory();
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
            
              <div className="card bg-dark text-white">
                <div className="card-header"> 
                  <h4 className="card-title text-center">Login</h4></div>
                <div className="card-body">

                
                    
                    

                  <form action="login" className="was-validated">
                    <div className="form-group">
                      <label htmlFor="uname">Username:</label>
                      <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="pwd">Password:</label>
                      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>

                   
                   
                  </form> 
                  
                </div>
                
                <div><button type="submit" className="btn btn-primary btn-block">Login</button></div>
                
                <div><button type="button" className="btn1 btn-primary btn-block" onClick={()=>history.push('/register')}>New? Register</button></div>
                
              </div>
              
              
            </div>
            
            <div className="col">
              <img className="img-fluid float-right" src={img2} />
            </div>
          </div>
        </div>
      </div>);
         
     
 };
 export default Login