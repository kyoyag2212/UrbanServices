
import Home from './Home';
import logo from './assets/img/logo.png';
import img1 from './assets/img/home-service-1.png';
import img2 from './assets/img/home-service-2.jpg';
import {Router,Link, Route,useHistory} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import { RatingView } from 'react-simple-star-rating';
import axios from 'axios'
import Table from './Table.jsx'



const handleViewALLComment = async (sp_id) => {
  
 
  try {
    const response=await axios
    .post("http://localhost:4001/users/adminviewcomments", {
    })
    return response.data

  } catch (error) {
    console.log(error)
      return false
  }
  
};

 function AdminViewComments(){
     const history=useHistory();
     const uname = localStorage.getItem("username");

     let data = [
      {
        uname: "Table is Empty",
        pincode: 0,
      },
    ];
    const [tabledata, settabledata] = useState(data);

    const displayComments = async () => {
      const response = await handleViewALLComment();
  
      console.log(response);
      if (response !== null || response !== undefined) {
        settabledata(response);
      } else {
        console.log(`Response is null`);
      }
    };
    useEffect(() => {
      settabledata(data);
      displayComments();
    }, []);
   

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
          <div className={localStorage.getItem("userlogged")}>
          <button class=" btn5 btn-primary " type="submit" onClick={() => history.push('/profile')}>
            {uname}
          </button>
          </div>
        
        </nav>
        <br />
     
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <img className="img-fluid float-left" src={img1} />
            </div>
            <div className="col-sm-6">
              <div className="card1 bg-dark text-white">
                <div className="card-header"> 
                  <h4 className="card-title text-center">Comments</h4></div>
                <div className="card-body">
                  <div className="container" style={{width:"260px"}}>
                    {/* TABLE CONSTRUCTION*/}
                    <table id="table" className="table table-dark table-hover">
                      {/* HEADING FORMATION */}
                      <tbody>
                      {tabledata !== null && tabledata !== undefined ? (
                        <Table data={tabledata} />
                      ) : (
                        <p>Table is empty</p>
                      )}
                      </tbody></table></div></div></div></div>

                      <div className="col-sm-3">
              <img className="img-fluid float-right" src={img2} /></div>

                      </div></div></div>
    );
  };
 export default AdminViewComments