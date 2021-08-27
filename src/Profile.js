import React,{useState,useEffect} from "react";
import Home from "./Home";
import logo from "./assets/img/logo.png";
import img1 from "./assets/img/home-service-1.png";
import img2 from "./assets/img/home-service-2.jpg";
import img3 from "./assets/img/profile-icon.png";
import { Router, Link, Route, useHistory } from "react-router-dom";
import axios from 'axios'
import { toast } from "react-toastify";
import { RatingView } from 'react-simple-star-rating';
import Table from './Table.jsx'

const handleavgRating=async()=>{
  try {
    const response=await axios
    .post("http://localhost:4001/users/getavgrating", {
      user_id:localStorage.getItem("user_id"),
      

    })
    console.log(response.data[0].rating)
    return response.data[0].rating
  
   
    
  } catch (error) {
    console.log(error)
      
  }

}

const handlemyListiings=async()=>{

  try {
    const response=await axios
    .post("http://localhost:4001/users/mylistings", {
      user_id:localStorage.getItem("user_id"),
      

    })
    return response.data
  
   
    
  } catch (error) {
    console.log(error)
      
  }


}

const handleupdateemail = async (user_id, email) => {
  
 
  try {
    const response=await axios
    .post("http://localhost:4001/users/updateemail", {
      user_id:user_id,
      email:email

    })
    if( response.data.message=='updated')
    {
      return true
    }
    else {
      console.log(response.data.message)
      return false
    }
  } catch (error) {
    console.log(error)
      return false
  }
  
};

const handleupdatephone = async (user_id, phone) => {
  
 
  try {
    const response=await axios
    .post("http://localhost:4001/users/updatenumber", {
      user_id:user_id,
      u_phoneno:phone

    })
    if( response.data.message=='updated')
    {
      return true
    }
    else {
      console.log(response.data.message)
      return false
    }
  } catch (error) {
    console.log(error)
      return false
  }
  
};



function Profile() {
  const history = useHistory();
  const uname = localStorage.getItem("username");

  const [email, setemail] = useState("");
  const [phoneno, setphoneno] = useState("");
  const[rating,setrating]=useState(); 
 

  const logout=()=>{
    localStorage.clear();
    localStorage.setItem("user_id","")
    
    history.push('/')
    toast.success("Logged Out!")

  }

  let data = [
    {
      uname: "Table is Empty",
      pincode: 0,
    },
  ];
  const [tabledata, settabledata] = useState(data);


  const displaylistings = async () => {
    const response = await handlemyListiings();

    console.log(response);
    if (response !== null || response !== undefined) {
      settabledata(response);
    } else {
      console.log(`Response is null`);
    }
  };

  const displayrating = async () => {
    const response = await handleavgRating();

    console.log(response);
    if (response !== null || response !== undefined) {
     setrating(response)
    } else {
      console.log(`Response is null`);
    }
  };
  useEffect(() => {
    if(localStorage.getItem("usertype")=="SP")
    {
      settabledata(data);
      displaylistings();
      displayrating()
    }
   
  }, []);


  const checkphoneupdate=async ()=>{
    const response=await handleupdatephone(localStorage.getItem('user_id'),phoneno)
    if (response)
    {
      toast.success("Update Successful!")
      localStorage.removeItem('userphone')
      localStorage.setItem('userphone',phoneno)
  
    }
    else
    {
      toast.error("Update UnSuccessful! Try Again")
    }
  }
  
  const checkemailupdate=async ()=>{
    const response=await handleupdateemail(localStorage.getItem('user_id'),email)
    if (response)
    {
      toast.success("Update Successful!")
      localStorage.removeItem('email')
      localStorage.setItem('email',email)
  
    }
    else
    {
      toast.error("Update UnSuccessful! Try Again")
    }
  }
 
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
        <button class=" btn5 btn-primary " type="submit" onClick={() => logout()}>
            Logout
          </button>
          <div className={localStorage.getItem("isvisible")}>
          <button type="button" className=" btn10 btn-primary btn-block"  style={{width:250}} onClick={() => history.push('/comments')}>
                      View Comments
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
          <div className="col-sm-9">
            <div class="card1 bg-dark text-white">
              <div className="card-header">
                <h4 className="card-title text-center">Profile</h4>
              </div>

              <br></br>
              <br></br>
              <img
                class="card-img-top mx-auto d-block container pt-3"
                src={img3}
                alt="profile pic"
                style={{ width: "250px" }}
              ></img>
              <h5 class="card-text">{localStorage.getItem('username')}</h5>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-2">
                    <label htmlFor="uname">Email:</label>
                  </div>
                  <div class="col-sm-7">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder={localStorage.getItem('email')}
                        name="email"
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                        value={email}
                        
                        required
                      />

                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">
                        Please fill out this field.
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <button type="submit" className="  btn-primary btn-block" onClick={()=>checkemailupdate()}>
                  
                      Update
                    </button>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-2">
                    <label htmlFor="uname">Phone:</label>
                  </div>
                  <div class="col-sm-7">
                    <div className="form-group">
                      <input
                        type="phone"
                        className="form-control"
                        id="uname"
                        placeholder={localStorage.getItem('userphone')}
                        name="uname"
                        minLength="10"
                        maxLength="10"
                        required
                        onChange={(e) => {
                          setphoneno(e.target.value);
                        }}
                        value={phoneno}
                        
                      />

                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">
                        Please fill out this field.
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <button type="submit" className="  btn-primary btn-block" onClick={()=>checkphoneupdate()}>
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <button type="submit" className=" btn7 btn-primary btn-block"  style={{width:250}} onClick={() => history.push('/RegisterServices')}>
                      List Services
                    </button>
                   
            <br></br>
            <br></br>
             <div className={localStorage.getItem('isvisible')}> 
              
            <section id="listing">
              <h3>Average Rating</h3>
            <div className='App'>
             <RatingView ratingValue={rating} /* RatingView Props */ />
             </div>
            <div className="card bg-dark text-white">
                <div className="card-header"> 
                  <h4 className="card-title text-center">My Listings</h4></div>
                <div className="card-body">
                  <div className="container" style={{width:"270px"}}>
                    {/* TABLE CONSTRUCTION*/}
                    <table id="table" className="table table-dark table-hover">
                      {/* HEADING FORMATION */}
                      <tbody>
                      {tabledata !== null && tabledata !== undefined ? (
                        <Table data={tabledata} />
                      ) : (
                        <p>Table is empty</p>
                      )}
                      </tbody></table>

                      </div></div></div>
                      </section>
                      </div>
          </div>
        </div>

      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

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
export default Profile;
