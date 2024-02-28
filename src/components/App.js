import React, {useState} from "react";
import TopBar from "./TopBar";
import Main from "./Main";
import {TOKEN_KEY} from "../constants";
import '../styles/App.css';

function App() {
    //isLoggedIn state > based on localStorage has token or not
    //decide whether token_key exist
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem(TOKEN_KEY) ? true : false
    );

    const logout = () => {
        console.log("log out");
        //delete token from localStorage
        //set isLoggedIn status -> false
        localStorage.removeItem(TOKEN_KEY);
        setIsLoggedIn(false);
    };

    const loggedIn = (token) => {
        if (token) {
            localStorage.setItem(TOKEN_KEY, token);
            setIsLoggedIn(true);
        }
    };

    //in main, not use if-else to display login/register
    //use React Router -- a pair of key-value
    //to connect with SPA--single page application
    //router in
    //frontend: url - page
    //backend: request(/login)
  return (
    <div className="App">
        <TopBar isLoggedIn={isLoggedIn} handleLogout={logout}/>
        <Main isLoggedIn={isLoggedIn} handleLoggedIn={loggedIn} />
    </div>
  );
}

export default App;
