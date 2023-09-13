// import PropTypes from 'prop-types'
import React, { useContext }  from 'react'
import { Link , NavLink } from 'react-router-dom'
import UserContext from "../auth/UserContext";
import './Navbar.css'


const Navbar = (props) => {  
  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
      <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark " style={{backgroundColor:'lightslategray' , fontWeight:'bold' , color:'black'}}>
          <div className="container-fluid my-container-fluid">
            <Link className="navbar-brand" to="/homepage">The Breaking News</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li> */}
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories...
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/general">General</Link></li>
                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>                    
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/homepage" onClick={props.logout}>
                    Log out {currentUser.username}
                  </Link>
                </li>
              </ul>              
            </div>           
          </div>
        </nav>
      </>
    )
  }

  function loggedOutNav() {
    return (      
          <nav className="Navigation navbar navbar-expand-md">
            <div className="left-content">
              <ul className="navbar-login-signup">
                <li>
                  <Link to="/homepage" className="nav-link">
                    <img src="https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=1024x1024&w=is&k=20&c=-AdIwLn-nIYlgctc95CZuJHnkku_ia-f8A8m2LFwl2A=" style={{height:'50px',width:'80px',borderRadius:'20px',marginTop:'5px',paddingLeft:'2px'}}></img>
                  </Link>
                </li>
              </ul>              
            </div>
            <div className="right-content">
              <ul className="navbar-login-signup">
                <li>
                  <Link className="homepage-nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="homepage-nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>         
          </nav>
    );
  }

  return (    
      // <div className="navbar-collapse">
      <>
        {currentUser ? loggedInNav() : loggedOutNav()}
      </>
  
  );
}

export default Navbar