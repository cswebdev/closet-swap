import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import AuthHeader from "../Header/AuthHeader";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Styles/App.css";

function App() {
   const [isAuth, setAuth] = useState(null);
   const [cartItems, setCartItems] = useState([]); // this is an array for cart info

   const handleLogOut = () => {
      setAuth(false);
   };

   const handleLogIn = () => {
      setAuth(true);
   };



   return (
      <>
         {isAuth ? <AuthHeader onLogout={handleLogOut} /> : <Header />}
         <Outlet context={{ setAuth, cartItems, setCartItems, onLogin:{handleLogIn} }} />
      </>
   );
} // this is the main app component

export default App;
