import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase';
import mainLogo from'./resourcefiles/finstaglam_logo.png';


    export const Register = (props) => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [name, setName] = useState('');

           const handleSubmit = (e) => {
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
            <div className="main-container">
                <div className="auth-form-container">
                    <h2>Register a new account!</h2>
                    <form className="register-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Enter your full name" id="name" name="name"/>

                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email id" id="email" name="email"/>

                        <label htmlFor="password">Set Password</label>
                        <input value={password} onChange={({target: {value}}) => setPassword(value)} type="password" placeholder="********" id="password" name="password"/>

                        <button> Register </button>
                    </form>

                    <button className="link-btn" onClick={() => props.onFormSwitch('login')}> Already have account? The login Dammit! </button>

                </div>
            </div>
        )

    }