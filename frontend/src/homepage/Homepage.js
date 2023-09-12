import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Homepage.css";

/** Homepage of site.
 *
 * Shows welcome message or login/signup buttons.
 *
 * Routed at /homepage
 *
 * AppRoutes -> Homepage
 */

function Homepage() {
  const { currentUser } = useContext(UserContext);
 
  return (
    <div className="Homepage">      
      <div className="homepage-container text-center">   
        {currentUser ? ( 
          <>         
            <h2>Welcome Back, {currentUser.firstName}</h2>
            <p style={{fontWeight :'bold'}}>Please select your Categories in menu to search news</p>
          </>    
        ) : (
          <>          
            <h1 className="mb-4 font-weight-bold homepage">Search Engine for Breaking News</h1>
            <p className="homepage" style={{fontWeight :'bold'}}>All the breaking news in one, convenient place.</p>          
            <p className="homepage">
              <Link
                className="homepage-btn btn-primary font-weight-bold homepage-btn-margin"
                to="/login"
              >
                Log in
              </Link>
              <Link className="homepage-btn btn-primary font-weight-bold" to="/signup">
                Sign up
              </Link>
            </p>
          </>         
        )}
      </div>
    </div>
  );
}
export default Homepage;