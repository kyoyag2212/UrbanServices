import "./App.css";
import Login from "./Login";
import "./assets/css/index.css";
import png1 from "./assets/img/1.png";
import png2 from "./assets/img/2.png";
import experience1 from "./assets/img/experience1.png";
import sanitizer from "./assets/img/sanitizer.jpg";
import temperature from "./assets/img/temperature.png";
import clean from "./assets/img/clean.jpg";
import electrician from "./assets/img/electrician.png";
import househelp from "./assets/img/househelp.jpg";
import plumber from "./assets/img/plumber.jpg";
import cook from "./assets/img/cook.jpg";
import logo from "./assets/img/logo.png";
import { Router, Link, Route, useHistory } from "react-router-dom";

const checklogin = () => {
  if (localStorage.getItem("user_id") == "") {
    localStorage.setItem("userlogged", "invisible");
  }
};

function Home() {
  const history = useHistory();
  checklogin();

  return (
    <div className="Home">
      <Route exact path="/login" component={Login} />
      <div>
        {/* Meta Tags for SEO */}
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Title */}
        <title>UrbanClap Clone</title>
        {/* Linking Favicon, Apple Touch Icon, Font Awesome, AOS, Bootstrap & CSS */}
        <link rel="icon" href={logo} />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/index.css" />
        {/* No Script */}
        <noscript>Please enable JavaScript to open this page.</noscript>
        {/* Navbar */}
        <nav
          className="navbar  navbar-expand-lg navbar-dark "
          style={{ background: "black" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="#"></a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#safety">
                  Safety
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* Carousel */}
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={experience1} />
            </div>
          </div>
        </div>
        {/* Experiences Section */}
        <section id="safety">
          <div className="container p-5">
            <div className="row justify-content-center">
              <h3 className="text-center font-weight-bolder">
                Safety in the Spotlight
              </h3>
            </div>
            <div className="row justify-content-center">
              <h6 className="text-center light-text font-weight-normal">
                Hygienic &amp; Single-use products | Low-contact services
              </h6>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-6 col-md-3">
                <img src={sanitizer} alt="Image" className="img-fluid" />
                <h5 className="text-center mt-3 font-weight-bold">
                  Sanitized Hands{" "}
                </h5>
                <p className="text-center lighter-text">At Your Service</p>
              </div>
              <div className="col-6 col-md-3">
                <img src={temperature} alt="Image" className="img-fluid" />
                <h5 className="text-center mt-3 font-weight-bold">
                  Temparature Checks{" "}
                </h5>
                <p className="text-center lighter-text">For Your Care</p>
              </div>
            </div>
          </div>
        </section>
        {/* Section Separate */}
        <section style={{ background: "#F1F4F6", height: "20px" }} />
        {/* Appliances Section */}
        <section id="services">
          <div className="container p-5">
            <div className="row justify-content-center">
              <h3 className="text-center font-weight-bolder">
                {" "}
                Services That Your Home Deserve💙
              </h3>
            </div>
            <div className="row justify-content-center">
              <h6 className="text-center light-text font-weight-normal">
                Expert Service Providers at your doorstep
              </h6>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-15 col-md-3">
                <img
                  src={clean}
                  alt="Image"
                  className="img-fluid"
                  onClick={() => {
                    localStorage.setItem("name", "cleaning");
                    history.push("/showservices");
                  }}
                />
                <p
                  className="text-center mt-3"
                  onClick={() => {
                    localStorage.setItem("name", "cleaning");
                    history.push("/showservices");
                  }}
                >
                  Cleaning
                </p>
              </div>
              <div className="col-15 col-md-3">
                <img
                  src={cook}
                  alt="Image"
                  className="img-fluid"
                  onClick={() => {
                    localStorage.setItem("name", "cook");
                    history.push("/showservices");
                  }}
                />
                <p
                  className="text-center mt-3"
                  onClick={() => {
                    localStorage.setItem("name", "cook");
                    history.push("/showservices");
                  }}
                >
                  Cooking
                </p>
              </div>
              <div className="col-15 col-md-3">
                <img
                  src={plumber}
                  alt="Image"
                  className="img-fluid"
                  onClick={() => {
                    localStorage.setItem("name", "plumber");
                    history.push("/showservices");
                  }}
                />
                <p
                  className="text-center mt-3"
                  onClick={() => {
                    localStorage.setItem("name", "plumber");
                    history.push("/showservices");
                  }}
                >
                  Plumbing
                </p>
              </div>

              <div className="col-15 col-md-3">
                <img
                  src={electrician}
                  alt="Image"
                  className="img-fluid"
                  onClick={() => {
                    localStorage.setItem("name", "electrician");
                    history.push("/showservices");
                  }}
                />
                <p
                  className="text-center mt-3"
                  onClick={() => {
                    localStorage.setItem("name", "electrician");
                    history.push("/showservices");
                  }}
                >
                  Electrical Maintence
                </p>
              </div>

              <div className="col-15 col-md-3">
                <img
                  src={househelp}
                  alt="Image"
                  className="img-fluid"
                  onClick={() => {
                    localStorage.setItem("name", "househelp");
                    history.push("/showservices");
                  }}
                />
                <p
                  className="text-center mt-3"
                  onClick={() => {
                    localStorage.setItem("name", "househelp");
                    history.push("/showservices");
                  }}
                >
                  HouseHelp
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <div className="container" style={{ overflowX: "hidden" }}>
            <div className="row">
              <div className="col-12 col-md-12">
                <img
                  src={logo}
                  className="img-fluid"
                  alt="Urban Services"
                  style={{ width: "250px" }}
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
    </div>
  );
}
export default Home;
