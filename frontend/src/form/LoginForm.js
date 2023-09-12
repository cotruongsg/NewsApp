import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../support/Alert";
import './Form.css'


/** Login form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls login function prop
 * - redirects to /companies route
 *
 * AppRoutes -> LoginForm -> Alert
 * Routed as /login
 */
function LoginForm({ login }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [formErrors, setFormErrors] = useState([]);
  const navigate = useNavigate();
  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await login(formData);
    if (result.success) {
      navigate("/homepage");
    } else {
      setFormErrors(result.errors);
    }
  }
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  }
  return (
    <div className="SignForm">      
      <div className="signup_page-container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <div className="signup_page-card signup-card">
          <div className="signup_page-card-body">
            <h4 className="sign-up">Login</h4>
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
export default LoginForm
