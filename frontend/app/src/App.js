import React from 'react';
import './App.css';
import Main from './Components/Main';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div class="container">
		
		<div class="form">
  
      <div class="tab-content">
        <div id="signup">   
          <h1>Make an Account</h1>
          
          <form action="/" method="post">
          
          <div class="top-row">
            <div class="field-wrap">

              <input type="text" placeholder = "First Name" required autocomplete="off" />
            </div>
        
            <div class="field-wrap">
              <label>
                <span class="req"> </span>
              </label>
              <input type="text" placeholder = "Last Name" required autocomplete="off"/>
            </div>
          </div>

          <div class="field-wrap">
            <input type="email" placeholder = "Email"required autocomplete="off"/>
          </div>
          
          <div class="field-wrap">

            <input type="password" placeholder = "Password" required autocomplete="off"/>
          </div>
          
            
      
       <button type="button" onclick="signUp()">Sign Up</button>  <button type="button" onclick="signUp()">Login</button>
      
     
      
          
          </form>

        </div>
        
       
      </div>
      
</div>
		<script src="webjars/jquery/1.9.1/jquery.min.js"></script>
		<script src="webjars/bootstrap/3.3.6/js/bootstrap.min.js"></script>
		<script src="js/custom.js"></script>
	</div>
  );
}

export default App;
