import { signInWithEmailAndPassword } from 'firebase/auth'
import React, {useState} from 'react';
import { auth } from './firebase';
import mainLogo from'./resourcefiles/finstaglam_logo.png';
    export const Login = (props) => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleLogin = (e) => {
            e.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            console.log(userCredential)
            }).catch((error) => {
            console.log(error)});
//            console.log(email)
        }

        return(
//        <div id="wrapper">
//            <div className="auth-form-container">
//                <img className="logo" src={mainLogo}  alt="shit" />
//                <form className="login-form" onSubmit={handleSubmit}>
//                    <input className="input-auth" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email id" id="email" name="email"/>
//                    <input className="input-auth" value={password} onChange={({target: {value}}) => setPassword(value)} type="password" placeholder="Password" id="password" name="password"/>
//
//                    <button className="login-btn"> Log in </button>
//                </form>
//            </div>
//            <div className="register-link-container">
//                <button className="link-btn" onClick={() => props.onFormSwitch('register')}> Don't have account? Make a new one dawg! </button>
//            </div>
//        </div>

        <div id="wrapper">
          <div class="main-content">
            <div class="header">
              <img src="https://i.imgur.com/zqpwkLQ.png" />
            </div>
            <div class="l-part">
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email ID" class="input-1" />
              <div class="overlap-text">
                <input type="password" value={password} onChange={({target: {value}}) => setPassword(value)} placeholder="Password" class="input-2" />

              </div>
              <input type="button" onClick={handleLogin} value="Log in" class="btn" />
            </div>
          </div>
          <div class="sub-content">
            <div class="s-part">
              Don't have an account?<a href="#" onClick={() => props.onFormSwitch('register')}>Sign up</a>
            </div>
          </div>
        </div>
        )

    }