import NewsApi from './api/api';
import useLocalStorage from "./hooks/useLocalStorage";
import Navbar from './Components/Navbar'
import UserContext from "./auth/UserContext";
import jwt from "jsonwebtoken"
import News from './Components/News';
import About from './Components/About';
import Footer from "./Components/Footer";
import Homepage from "./homepage/Homepage";
import LoginForm from "./form/LoginForm";
import SignupForm from "./form/SignupForm";
import ProfileForm from "./profile/ProfileForm";
import './App.css';
import "./polyfills";

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate
} from 'react-router-dom'
import LoadingBar from '@weblif/react-top-loading-bar'

export const TOKEN_STORAGE_ID = "NewsApi-token";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [infoLoaded, setInfoLoaded] = useState(false);  
  const [progress, setProgress] = useState(0)

  // const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const apiKey = "c09f6fcff73747f0ae18dc62117303db"
  const pageSize = 5;

  // Handle Auth
  // need a useEffect will run whenever the app get a new token
  useEffect(function loadUserInfor(){
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getUser(){
      if (token){
        try {
          // jwt.decode() will return a payload object which contain username.
          let { username } = jwt.decode(token);
          //update new token in the Api class so it can use it to call the API.
          NewsApi.token = token;
          let currentUser = await NewsApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          console.debug(currentUser);
         
        }catch(err){
           console.error("App loadUserInfo: problem loading", err);
           setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    } 
    // we need to set infoLoaded to fasle before we fetch the data 
    // It will show on the screen : Loading.... when it is waiting for the data from the request.
    setInfoLoaded(false);
    getUser();

  }, [token]);
 
  // login and get token
  async function login(loginData){
    try{
      let token = await NewsApi.login(loginData);
      setToken(token);
      return {success :true}
    }catch(errors){
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  //signup and  get token
  async function signup(signupData){
    try{
      let token = await NewsApi.signup({...signupData});
      setToken(token);
      return {success :true};
    }catch(errors){
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  // signout and value of token and currentUser will be null
  async function logout(){
    setCurrentUser(null);
    setToken(null)
  }

  // Return Routes
    return (
      <>
        <Router>
          <UserContext.Provider value={{ currentUser, setCurrentUser , progress}}>
            <Navbar logout={logout}/>
              <LoadingBar
                height = {4}
                color='#39FF14'
                progress={progress}
              />
              <Routes>
                {/* Unauthorized Routes  */}
                {!currentUser && (
                  <>
                    <Route path="/login" element={<LoginForm login={login} />} />
                    <Route path="/signup" element={<SignupForm signup={signup} />} />
                  </>
                )}
                <Route path="/homepage" element={<Homepage />} />

                {/* Authorized Routes  */}
                {currentUser && (
                  <>                             
                    <Route path="/about" element={<About />} />
                    <Route exact path="/" element={<News setProgress = {setProgress} apiKey = {apiKey} key = "general" pageSize = {pageSize} country = {'us'} category = {'general'}/>}/>
                    <Route exact path="/business" element={<News setProgress = {setProgress} apiKey = {apiKey} key = "business" pageSize = {pageSize} country = {'us'} category = {'business'}/>}/>
                    <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey = {apiKey}  key = "entertainment" pageSize = {pageSize} country = {'us'} category = {'entertainment'}/>}/>
                    <Route exact path="/general" element={<News setProgress = {setProgress} apiKey = {apiKey} key = "general" pageSize = {pageSize} country = {'us'} category = {'general'}/>}/>
                    <Route exact path="/health" element={<News setProgress = {setProgress} apiKey = {apiKey} key = "health" pageSize = {pageSize} country = {'us'} category = {'health'}/>}/>
                    <Route exact path="/science"element={<News setProgress = {setProgress} apiKey = {apiKey} key = "science"  pageSize = {pageSize} country = {'us'} category = {'science'}/>}/>
                    <Route exact path="/sports"element={<News setProgress = {setProgress} apiKey = {apiKey} key = "sports" pageSize = {pageSize} country = {'us'} category = {'sports'}/>}/>
                    <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey = {apiKey} key = "technology" pageSize = {pageSize} country = {'us'} category = {'technology'}/>}/>           
                    <Route path="/profile" element={<ProfileForm />} />
                  </> 
                )}
              </Routes>
              <Footer />
          </UserContext.Provider>
        </Router>
      </>
    )

}

export default App;