import React, { useState } from "react";
import Home from "./Home";
import List from "./List";
import logo from "./assets/img/logo.png";
import img1 from "./assets/img/home-service-1.png";
import img2 from "./assets/img/home-service-2.jpg";
import { Router, Link, Route, useHistory } from "react-router-dom";


function Search() {
  const history = useHistory();
  const [service, setservice] = useState("");
  const [pincode, setpincode] = useState("");
  const uname = localStorage.getItem("username");

  return (
    <div>
      <title>Search</title>
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
          <li>
            <a className="navbar-brand" href="/">
              <h1 className="display-5">Urban Services</h1>
            </a>
          </li>
        </ul>

        <div className={localStorage.getItem("userlogged")}>
          <button
            class=" btn5 btn-primary "
            type="submit"
            onClick={() => {
              history.push("/profile");
              
            }}
          >
            {uname}
          </button>
        </div>
      </nav>

      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img className="img-fluid float-left" src={img1} />
          </div>
          <div className="col">
            <div className="card1 bg-dark text-white">
              <div className="card-header">
                <h4 className="card-title text-center">Search</h4>
              </div>
              <div className="card-body">
                <form action="login" className="was-validated">
                  <div className="form-group">
                    <label htmlFor="uname">Pincode</label>
                    <input
                      type="int"
                      className="form-control"
                      id="pcode"
                      placeholder="Pincode"
                      name="pcode"
                      required
                      onChange={(e) => {
                        setpincode(e.target.value);
                      }}
                      value={pincode}
                    />
                  </div>

                  <div
                    className="form-group"
                    onChange={(e) => {
                      setservice(e.target.value);
                    }}
                    value={service}
                  >
                    <label htmlFor="service">Select Service</label>
                    <select name="serviceproviders" class="custom-select">
                      <option selected>Select Service</option>
                      <option value="cleaning">Cleaning Expert</option>
                      <option value="cook">Cook</option>
                      <option value="electrician">Electrician</option>
                      <option value="househelp">Househelp</option>
                      <option value="plumber">Plumber</option>
                    </select>
                  </div>
                </form>
              </div>

              {/* <div><button type="submit" className="btn btn-primary btn-block">Login</button></div> */}

              <div>
                <button
                  type="button"
                  className="btn11 btn-primary btn-block"
                  onClick={() => {
                    localStorage.setItem("listservice", service);
                    localStorage.setItem("listpincode", pincode);
                    console.log(localStorage.getItem('listservice'))
                    console.log(localStorage.getItem('listpincode'))
                    history.push("/list");
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="col">
            <img className="img-fluid float-right" src={img2} />
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
      
    </div>
  );
}
export default Search;
