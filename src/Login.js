import React from 'react'
import "./Login.css"
import {useHistory} from 'react-router-dom'
const Login = () => {
    const history=useHistory();
const toggleForm = (e) => {
  const container = document.querySelector('.container');
  container.classList.toggle('active');
};
const moveToDash=()=>{
    history.push("/dashboard")
}

    return (
      <div>
        <section>
          <div class="container" id="container">
            <div class="user signinBx">
              <div class="imgBx">
                <img
                  src="https://www.elmhurst.edu/wp-content/uploads/2019/11/software-developer-vs-software-engineer-illustration.jpg"
                  alt=""
                />
              </div>
              <div class="formBx">
                <form action="" onSubmit={moveToDash}>
                  <h2>Sign In</h2>
                  <input type="text" name="" placeholder="Username" />
                  <input type="password" name="" placeholder="Password" />
                  <input type="submit" name="" value="Login" />
                  <p class="signup">
                    Don't have an account ?
                    <a href="#" onClick={toggleForm}>
                      Sign Up.
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div class="user signupBx">
              <div class="formBx">
                <form action="" onSubmit={moveToDash}>
                  <h2>Create an account</h2>
                  <input type="text" name="" placeholder="Username" />
                  <input type="email" name="" placeholder="Email Address" />
                  <input
                    type="password"
                    name=""
                    placeholder="Create Password"
                  />
                  <input
                    type="password"
                    name=""
                    placeholder="Confirm Password"
                  />
                  <input type="submit" name="" value="Sign Up" />
                  <p class="signup">
                    Already have an account ?
                    <a href="#" onClick={toggleForm}>
                      Sign in.
                    </a>
                  </p>
                </form>
              </div>
              <div class="imgBx">
                <img
                  src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Login
