import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Styles/App.css";

function App() {
   const [isAuth, setAuth] = useState(false);

   return (
      <>
         <Header isAuth={isAuth} />
         <Outlet context={[setAuth]} />
      </>
   );
}

export default App;
