import React,{useState,useEffect} from 'react';
import Register from './Register';
import Home from './Home';
import logo from './assets/img/logo.png';
import img1 from './assets/img/admin1.jpg';
import img2 from './assets/img/admin2.jpg';
import {Router,Link, Route,useHistory} from 'react-router-dom';
import axios from 'axios'
import { toast } from "react-toastify";
import AdminTable from "./AdminTable.jsx";


const handlegetUsers= async () => {

  try {
    const response=await axios
    .post("http://localhost:4001/users/all", {

    })
    return response.data
   
  } catch (error) {
    console.log(error)
      return false
  }
  
};

 function AdminPanel(){

     const history=useHistory();
     const [uname, setuname] = useState("");
     const [pwd, setpwd] = useState("");
     let data = [
        {
          uname: "Table is Empty",
          pincode: 0,
        },
      ];
      const [tabledata, settabledata] = useState(data);

      const displayUsers = async () => {
        const response = await handlegetUsers();
    
        console.log(response);
        if (response !== null || response !== undefined) {
          settabledata(response);
        } else {
          console.log(`Response is null`);
        }
      };
      useEffect(() => {
        settabledata(data);
        displayUsers();
      }, []);
     
     


     return(
     <div className={localStorage.getItem("adminlogged")}>
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
          <div className={localStorage.getItem("adminlogged")}>
          <button class=" btn5 btn-primary " type="submit" onClick={() =>{ history.push('/adminlogin')
                                                                            localStorage.removeItem("adminlogged")}}>
           Logout
          </button>
          </div>
        
        </nav>
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <img className="img-fluid float-left" src={img1}/>
            </div>
            <div className="col-sm-6">
            <div className="card1 bg-dark text-white">
              <div className="card-header">
                <h4 className="card-title text-center">
                  Users
                </h4>
              </div>
              <div className="card-body">
                <div className="container " style={{ width: "650px" }}>
                  {/* TABLE CONSTRUCTION*/}
                  <table id="table" className="table table-dark table-hover">
                    {/* HEADING FORMATION */}
                    <tbody>
                      {tabledata !== null && tabledata !== undefined ? (
                        <AdminTable data={tabledata} />
                      ) : (
                        <p>Table is empty</p>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
            
            <div className="col-sm-3">
              <img className="img-fluid float-right" src={img2} />
            </div>
          </div>
        </div>
      </div>);
         
     
 };
 export default AdminPanel