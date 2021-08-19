import React from 'react';
import Home from './Home';
import List from './List';
import logo from './assets/img/logo.png';
import img1 from './assets/img/home-service-1.png';
import img2 from './assets/img/home-service-2.jpg';
import {Router,Link, Route,useHistory} from 'react-router-dom';

 function Search(){
     const history=useHistory();
     return(
     <div>
        <title>Search</title>
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
                  <h4 className="card-title text-center">Search</h4></div>
                <div className="card-body">

                
                    
                    

                  <form action="login" className="was-validated">
                    <div className="form-group">
                      <label htmlFor="uname">Pincode</label>
                      <input type="number" className="form-control" id="pcode" placeholder="Pincode" name="pcode" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="pwd">Select Service</label>
                      <select name="serviceproviders" class="custom-select">
                      <option selected>Select Service</option>
                      <option value="Cleaning Expert">Cleaning Expert</option>
                      <option value="Cook">Cook</option>
                      <option value="Electrician">Electrician</option>
                      <option value="Househelp">Househelp</option>
                      <option value="Plumber">Plumber</option>
                      </select>
                    </div>

                   
                   
                  </form> 
                  
                </div>
                
                {/* <div><button type="submit" className="btn btn-primary btn-block">Login</button></div> */}
                
                <div><button type="button" className="btn btn-primary btn-block" onClick={()=>history.push('/list')}>Search</button></div>
                
              </div>
              
              
            </div>
            
            <div className="col">
              <img className="img-fluid float-right" src={img2} />
            </div>
          </div>
        </div>
      </div>);
         
     
 };
 export default Search