import { signInWithEmailAndPassword } from 'firebase/auth'
import React, {useState} from 'react';
import { auth } from './firebase';
import mainLogo from'./resourcefiles/finstaglam_logo.png';
    export const Login = (props) => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            console.log(userCredential)
            }).catch((error) => {
            console.log(error)});
//            console.log(email)
        }

        return(
        <div className="main-container">
            <div className="auth-form-container">
                <img className="logo" src={mainLogo}  alt="shit" />

                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email id" id="email" name="email"/>

                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={({target: {value}}) => setPassword(value)} type="password" placeholder="********" id="password" name="password"/>

                    <button> Login </button>
                </form>

                <button className="link-btn" onClick={() => props.onFormSwitch('register')}> Don't have account? Make a new one dawg! </button>

            </div>
        </div>
        )

    }