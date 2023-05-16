import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase';
import mainLogo from'./resourcefiles/finstaglam_logo.png';


    export const Register = (props) => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [name, setName] = useState('');


           const handleRegister = (e) => {
               e.preventDefault();
               console.log(email)
               console.log(password)
               createUserWithEmailAndPassword(auth, email, password)
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
                          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email ID" class="input-1" />
                          <input type="text" value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Full Name" class="input-1" />
                          <div class="overlap-text">
                            <input type="password" value={password} onChange={({target: {value}}) => setPassword(value)} placeholder="Password" class="input-2" />

                          </div>
                          <input type="button" onClick={handleRegister} value="Sign up" class="btn" />
                        </div>
                      </div>
                      <div class="sub-content">
                        <div class="s-part">
                          Already have an account?<a href="#" onClick={() => props.onFormSwitch('login')}>Log in</a>
                        </div>
                      </div>
                    </div>


        )

    }