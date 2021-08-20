import React from 'react';
import Home from './Home';
import logo from './assets/img/logo.png';
import img1 from './assets/img/home-service-1.png';
import img2 from './assets/img/home-service-2.jpg';
import img3 from './assets/img/profile-icon.png';
import {Router,Link, Route,useHistory} from 'react-router-dom';

 function Profile(){
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
            <div class="card bg-dark text-white" >
            <br></br>
            <br></br>
    <img class="card-img-top mx-auto d-block container pt-3" src={img3} alt="profile pic" style={{width: '250px'}}></img>
    <div class="card-body">
      
      <div className="form-group">
                      <label htmlFor="uname">Name:</label>
                      <input type="text" className="form-control" id="uname" placeholder="Name" name="uname" required />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email1">Email:</label>
                      <input type="email" className="form-control" id="email1" placeholder="Enter Email" name="email1" required />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>

                    <div className="form-group">
                    <label htmlFor="phoneno">Phone:</label>
                      <input type="phone" className="form-control" id="number" placeholder="Enter phone" name="number" required />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
      <a href="#" class="btn3 btn-primary">Update</a>
    </div>
    </div>
    <br></br>
    <br></br>
              <div className="card bg-dark text-white">
                <div className="card-header"> 
                  <h4 className="card-title text-center">Order Histroy</h4></div>
                <div className="card-body">
                  <div className="container">
                    {/* TABLE CONSTRUCTION*/}
                    <br /><table id="table" className="table table-dark table-hover">
                      {/* HEADING FORMATION */}
                      <tbody><tr>
                          <th>Name</th>
                          <th>Service</th>
                          <th>Pincode</th>
                          <th>Comments</th>
                          <th>Rating</th>
                          <th>Date and Time</th>
                        </tr>
                      </tbody></table></div></div></div></div></div></div></div>
    );
  };
 export default Profile