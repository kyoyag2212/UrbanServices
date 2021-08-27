import React,{useState} from 'react';
import Register from './Register';
import Home from './Home';
import logo from './assets/img/logo.png';
import img1 from './assets/img/admin1.jpg';
import img2 from './assets/img/admin2.jpg';
import {Router,Link, Route,useHistory} from 'react-router-dom';
import axios from 'axios'
import { toast } from "react-toastify";


const handleAdminComment = async (timestamp,description) => {
  
 
  try {
    const response=await axios
    .post("http://localhost:4001/users/admincomment", {
      sp_id: localStorage.getItem("adminuid"),
      timestamp:timestamp,
      description:description
    })
    return true

  } catch (error) {
    console.log(error)
      return false
  }
  
};

 function AdminComment(){

     const history=useHistory();
 
     const [description, setdescription] = useState("");
     const timestamp = Date.now()

     
     
     const OnSubmit=async ()=>{
    
      const response=await handleAdminComment(timestamp,description)
      if(response)
      {
        toast.success("Comment Successful")
  
      
        history.push('/adminviewcomments')
   
      }
      else
      {
        toast.error("Comment Unsuccessful! Try Again")
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
                  <h4 className="card-title text-center">Comments</h4></div>
                <div className="card-body">

                
                    
                    

                  <div className="form-group">
                      <label htmlFor="uname">Comments for User</label>
                      <textarea class="form-control" rows="3" id="Description" placeholder="Comments here" required
                      onChange={(e) => {
                        setdescription(e.target.value);
                      }}
                      value={description}></textarea>
                      </div>

                   
                   
         
                  
                </div>
                
                <div><button type="button" className="btn11 btn-primary btn-block" onClick={()=>OnSubmit()}>Add Comment</button></div>
                
              
              </div>
              
              
            </div>
            
            <div className="col">
              <img className="img-fluid float-right" src={img2} />
            </div>
          </div>
        </div>
      </div>);
         
     
 };
 export default AdminComment