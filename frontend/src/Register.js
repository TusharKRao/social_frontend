import React, {useState} from 'react';


    export const Register = (props) => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [name, setName] = useState('');

           const handleSubmit = (e) => {
               e.preventDefault();
               console.log(email)
               console.log(name)
           }


        return(
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Enter your full name" id="name" name="name"/>

                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email id" id="email" name="email"/>

                    <label htmlF="email">Set Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.password)}type="password" placeholder="********" id="password" name="password"/>

                    <button> Login </button>
                </form>

                <button className="link-btn" onClick={() => props.onFormSwitch('login')}> Already have account? The login Dammit! </button>

                </div>
        )

    }