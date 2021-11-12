import React from "react";
import { Link, Switch, BrowserRouter, Route } from "react-router-dom";
import "./login.css";
import "./index.css";
import SignUp from "./signup";
import App from "./App";

function Login() {
  return (
    <BrowserRouter>
      <div>
        {/* <Switch>
          <Route path="/" component={App} />
        </Switch>
        <Switch>
          <Route path="/signup.js" component={SignUp} />
        </Switch> */}
        <div class="body">
          <div class="container">
            <div class="form">
              <div class="tab-content">
                <div id="signup">
                  <h1>Login</h1>
                  <br></br>
                  <div name="input"></div>
                  <form action="/" method="post">
                    <div class="top-row">
                      <div class="field-wrap">
                        <input
                          type="text"
                          placeholder="username"
                          required
                          autocomplete="off"
                        />
                      </div>
                      <br></br>
                    </div>

                    <div name="input">
                      <div class="field-wrap">
                        <input
                          type="password"
                          placeholder="password"
                          required
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <br></br>
                    <div name="loginbutton">
                      <Link to="/login.js">
                        <button>Login</button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="navbut">
            <Link to="/">
              <button onClick="/">Home</button>
            </Link>
            <Link to="/signup.js">
              <button onClick="/signup.js">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default Login;
