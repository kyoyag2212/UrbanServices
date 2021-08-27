import React from "react";
import Home from "./Home";
import logo from "./assets/img/logo.png";
import img1 from "./assets/img/home-service-1.png";
import img2 from "./assets/img/home-service-2.jpg";
import { Router, Link, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ListTable from "./ListTable.jsx";

const handleServiceSearch = async (service, pincode) => {
  try {
    const response = await axios.post("http://localhost:4001/users/list", {
      service_category: localStorage.getItem("listservice"),
      pincode: localStorage.getItem("listpincode"),
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

function List() {
  const history = useHistory();
  const uname = localStorage.getItem("username");
  let data = [
    {
      uname: "Table is Empty",
      pincode: 0,
    },
  ];
  const [tabledata, settabledata] = useState(data);

  const displaydata = async () => {
    const response = await handleServiceSearch();

    console.log(response);
    if (response !== null || response !== undefined) {
      settabledata(response);
    } else {
      console.log(`Response is null`);
    }
  };
  useEffect(() => {
    settabledata(data);
    displaydata();
  }, []);
  return (
    <div>
      <title>Services</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <nav
        className="navbar  navbar-expand-lg navbar-dark justify-content-center"
        style={{ background: "black" }}
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo" style={{ width: "40px" }} />
            </a>
          </li>
        </ul>
        <a className="navbar-brand" href="/">
          <h1 className="display-5">Urban Services</h1>
        </a>
        <div className={localStorage.getItem("userlogged")}>
          <button
            class=" btn5 btn-primary "
            type="submit"
            onClick={() => history.push("/profile")}
          >
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
                <h4 className="card-title text-center">
                  Services in Your Area
                </h4>
              </div>
              <div className="card-body">
                <div className="container " style={{ width: "650px" }}>
                  {/* TABLE CONSTRUCTION*/}
                  <table id="table" className="table table-dark table-hover">
                    {/* HEADING FORMATION */}
                    <tbody>
                      {tabledata !== null && tabledata !== undefined ? (
                        <ListTable data={tabledata} />
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
            <img className="img-fluid float-left" src={img2} />
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
        
            </div>
          </div>
        </footer>
    </div>
  );
}
export default List;
