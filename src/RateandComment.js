import React from 'react';
import Home from './Home';
import List from './List';
import logo from './assets/img/logo.png';
import img1 from './assets/img/home-service-1.png';
import img2 from './assets/img/home-service-2.jpg';
import {Router,Link, Route,useHistory} from 'react-router-dom';

 function RateandComment(){
     const history=useHistory();
     return(
     <div>
        <title>Search</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
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
                  <h4 className="card-title text-center">Rate and Comment</h4></div>
                <div className="card-body">
                <div class="container">
                <div class="row">
                 <div class="col-lg-12">
                 <label for="comment">Your Rating</label>
                
   
   
                </div>
            </div>
            </div>
              
        <script></script>
                <div class="form-group">
                <label for="comment">Write Comment:</label>
                <textarea class="form-control" rows="5" id="comment"></textarea>
                </div> 
                 
                </div>
                
                {/* <div><button type="submit" className="btn btn-primary btn-block">Login</button></div> */}
                
                <div><button type="Submit" className="btn1 btn-primary btn-block" onClick={()=>history.push('/list')}>Submit</button></div>
                
              </div>
              
              
            </div>
            
            <div className="col">
            <div class="card bg-dark text-white">
                <div class="card-body">Sample Comment</div>
                </div>
              <br></br>
              <br></br>
              <div class="card bg-dark text-white">
                <div class="card-body">Sample Comment</div>
                </div>
              <br></br>
              <br></br>
              <div class="card bg-dark text-white">
                <div class="card-body">Sample Comment</div>
                </div>
              <br></br>
              <br></br>
              
            </div>
          </div>
        
         
        </div>
      </div>);
     
 };
 export default RateandComment