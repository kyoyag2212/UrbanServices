import React from 'react';
import Home from './Home';
import List from './List';
import logo from './assets/img/logo.png';
import img1 from './assets/img/home-service-1.png';
import img2 from './assets/img/home-service-2.jpg';
import {Router,Link, Route,useHistory} from 'react-router-dom';
import { Rating, RatingView } from 'react-simple-star-rating';
import { useState,useEffect } from 'react';
import axios from 'axios'
import { toast } from "react-toastify";
import Table from "./Table.jsx";


const getreviews=async(uid)=>
{
  try {

    const userid=await axios
    .post("http://localhost:4001/users/getreviews", {
    rid:uid
    });
    console.log(userid.data)
  return userid.data;
  
  }
  catch (error) {
    console.log(error)
   
      
  }
}

const getUserRID=async()=>{
  try {

    const userid=await axios
    .post("http://localhost:4001/users/getreviewid", {
    name:localStorage.getItem('rname')
    });
    console.log(userid.data[0].user_id)
  return userid.data[0].user_id;
  
  }
  catch (error) {
    console.log(error)
   
      
  }

}

const handleUserReview = async (uid, rating, review,timestamp) => {
  
 
  try {
    const response=await axios
    .post("http://localhost:4001/users/review", {
      user_id:localStorage.getItem('user_id'),
      r_id: uid,
      rating: rating,
      review: review,
      timestamp: timestamp,
    });
   console.log(uid)
  return true;
  }
  catch (error) {
    console.log(error)
    return false;
      
  }


  
  
};



 function RateandComment(){



     const history=useHistory();
     const [rating, setRating] = useState(0);
     const [review,setReview]=useState('');
    
     const timestamp = Date.now()
     let uid=0;
     const data = [
      {
        review: "Table is Empty",
        
      },
    ];
    const [tabledata, settabledata] = useState(data);
    const uname = localStorage.getItem("username");

    const displayreview = async (uid) => {
      const response = await getreviews(uid)
    
      console.log(response);
      
      if (response !== null || response !== undefined || response != null) {
        settabledata(response);
      } else {
        
        console.log(`Response is null`);
      }
    };
   

     useEffect ( async() => {
      uid= await getUserRID();
      settabledata(data);
      displayreview(uid);
      console.log(uid);
     }, []);

     


    

     const checkCommentUpdate=async ()=>{
       uid=await getUserRID();

      const response=await handleUserReview(uid,rating,review,timestamp )
      console.log(uid)
      
      if(response)
      {
        toast.success("Thanks for your Review!")
      }
      else
      {
        toast.error("Error! Review Again!")
      }
     }

     const handleRating = (rate) => {
        setRating(rate)
        
      }
      
      
    
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
          <div className={localStorage.getItem("userlogged")}>
          <button class=" btn5 btn-primary " type="submit" onClick={() => history.push('/profile')}>
            {uname}
          </button>
          </div>
        
        </nav>
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <img className="img-fluid float-left" src={img1}/>
            </div>
            <div className="col-sm-4">
            
              <div className="card1 bg-dark text-white">
                <div className="card-header"> 
                  <h4 className="card-title text-center">Rate and Comment</h4></div>
                <div className="card-body">
                <div class="container">
                <div class="row">
                 <div class="col-lg-12">
                 <label for="comment">Your Rating</label>
                 <div className='App'>
                <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
                 </div>
   
   
                </div>
            </div>
            </div>
              
        <script></script>
                <div class="form-group">
                <label for="comment">Write a Review:</label>
                <textarea class="form-control" rows="5" id="comment" onChange={(e) => {
                        setReview(e.target.value);
                      }}
                      value={review}
                      required></textarea>
                </div> 
                 
                </div>
                
                {/* <div><button type="submit" className="btn btn-primary btn-block">Login</button></div> */}
                
                <div><button type="Submit" className="btn1 btn-primary btn-block" onClick={()=>checkCommentUpdate()}>Submit</button></div>
                
              </div>
              
              
            </div>
            
            <div className="col-sm-4">
            <div className="card1 bg-dark text-white ">
              <div className="card-header">
                <h4 className="card-title text-center">
                  Reviews for {localStorage.getItem('rname')}
                </h4>
              </div>
              <div className="card-body justify-content-center">
                <div className="container " style={{ width: "100%" }}>
                  {/* TABLE CONSTRUCTION*/}
                  <table id="table" className="table table-dark table-hover">
                    {/* HEADING FORMATION */}
                    <tbody>
                      {tabledata !== null && tabledata !== undefined ? (
                        <Table data={tabledata} />
                      ) : (
                        <p>Table is empty</p>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
         
       
      </div>);
     
 };
 export default RateandComment