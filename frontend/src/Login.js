import React, {useState} from 'react';




    export const Login = (props) => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(email)
        }

        return(
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email id" id="email" name="email"/>

                <label htmlF="email">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.password)}type="password" placeholder="********" id="password" name="password"/>

                <button> Login </button>
            </form>

            <button className="link-btn" onClick={() => props.onFormSwitch('register')}> Don't have account? Make a new one dawg! </button>

        </div>
        )

    }