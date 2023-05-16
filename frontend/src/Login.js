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
        }

        return(

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