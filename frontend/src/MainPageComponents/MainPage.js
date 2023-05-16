import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';


export const MainPage = (props) => {

    const [authenticated, setAuthenticated] = useState(null);
    const location = useLocation();
    console.log(location.state.test);
    useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
//    console.log(loggedInUser);
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
    }, []);


    return(
            <div> MAIN-PAGE </div>
        );


}

