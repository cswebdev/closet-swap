import React from "react";
import ReactDOM from "react-dom/client";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   useParams,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App/App";
import HomePage from "./components/App/HomePage";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegistrationForm";
import reportWebVitals from "./reportWebVitals";
import DonationForm from "./components/DonationForm/DonationForm";
import StoreFront from "./components/Storefront/StoreFront";
import ProfileForm from "./components/Profile/ProfileForm";
import CheckOut from "./components/Checkout/Checkout";
import ChatPage from "./components/Chat/ChatPage";
import UsersProfiles from "./components/Profile/UsersProfiles";
import UserOrdersPage from "./components/UserOrders/UserOrdersPage";
import { Outlet } from "react-router-dom";

/*  */

function ProfilePage() {
   let { userId } = useParams();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route path="/" element={<App />}>
               <Route path="home" element={<HomePage />} />
               <Route path="login" element={<LoginForm />} />
               <Route path="register" element={<RegisterForm />} />
               <Route path="donate" element={<DonationForm />} />
               <Route path="shop" element={<StoreFront />} />
               <Route path="profile" element={<ProfileForm />} />
               <Route path="checkout" element={<CheckOut />} />
               <Route path="chat" element={<ChatPage />} />
               {/* <Route path="orders" element={<UserOrdersPage />} /> */}
               <Route path="users">
                  <Route path=":userId" element={<UsersProfiles />} />
               </Route>
               <Route index element={<HomePage />} />
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
