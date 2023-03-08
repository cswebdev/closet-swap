import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App/App";
import HomePage from "./components/App/HomePage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import reportWebVitals from "./reportWebVitals";
import DonationForm from "./components/DonationForm/DonationForm";

/*  */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route path="/" element={<App />}>
               <Route path="home" element={<HomePage />} />
               <Route path="login" element={<Login />} />
               <Route path="register" element={<Register />} />
               <Route path="donate" element={<DonationForm />} />
            </Route>
            <Route
               path="*"
               element={
                  <main>
                     <p className="text-center">404</p>
                  </main>
               }
            />
         </Routes>
      </Router>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
