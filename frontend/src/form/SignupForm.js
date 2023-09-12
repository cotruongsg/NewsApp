import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../support/Alert";
import "./Form.css"
function SignupForm({ signup }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const navigate = useNavigate();
  console.debug(
      "SignupForm",
      "signup=",
      typeof signup,
      "formData=",
      formData,
      "formErrors=",
      formErrors
    );

  async function handleSubmit(evt){
    evt.preventDefault();
    let result = await signup(formData);
    if (result.success){
        navigate("/homepage");
    }else{
        setFormErrors(result.errors);
    }

  }

  function handleChange(evt){
    const {name, value} = evt.target;
    setFormData(data => ({...data, [name]: value}));
  }

  return (
    <div className="SignForm">      
      <div className="signup_page-container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <div className="signup_page-card signup-card">
          <div className="signup_page-card-body">
            <h4 className="sign-up">Sign Up</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group left signup-label-font">
                <label>Username</label>
                <input
                  name="username"
                  value={formData.username}
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group left signup-label-font">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group left signup-label-font">
                <label>First name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group left signup-label-font">
                <label>Last name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group left signup-label-font">
                <label>Email</label>
                <input
                  name="email"
                  value={formData.email}
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null}
              <button
                className="btn btn-primary float-right"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupForm;
