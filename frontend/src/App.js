import React, {useState} from 'react';
import './App.css';
import { Login } from "./Login.js";
import { Register } from "./Register.js";

function App(){
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return(

        <div className="App">
            {
                currentForm == "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
            }
        </div>

    );

}

export default App;