import React from "react";
import { Outlet } from "react-router-dom";

function UserOrdersItems(props) {
   return (
      //individual orders w/ item info
      <div className="user-orders-items">
         <p>Here are the things you ordered</p>
      </div>
   );
}

export default UserOrdersItems;
