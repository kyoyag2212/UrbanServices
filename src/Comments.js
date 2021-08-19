import React from 'react';
import Home from './Home';
import logo from './assets/img/logo.png';
import img1 from './assets/img/home-service-1.png';
import img2 from './assets/img/home-service-2.jpg';
import {Router,Link, Route,useHistory} from 'react-router-dom';

 function Comments(){
     const history=useHistory();
     return(
        <div>
        <title>Services</title>
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
     
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <img className="img-fluid float-left" src={img1} />
            </div>
            <div className="col-sm-9">
            <h6><label htmlFor="pwd">Average Rating</label></h6>
              <div className="card bg-dark text-white">
                <div className="card-header"> 
                  <h4 className="card-title text-center">Services in Your Area</h4></div>
                <div className="card-body">
                  <div className="container">
                    {/* TABLE CONSTRUCTION*/}
                    <br /><table id="table" className="table table-dark table-hover">
                      {/* HEADING FORMATION */}
                      <tbody><tr>
                          <th>Name</th>
                          <th>Service</th>
                          <th>Comments</th>
                          <th>Rating</th>
                        </tr>
                      </tbody></table></div></div></div></div></div></div></div>
    );
  };
 export default Comments