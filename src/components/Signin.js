import React, { Component } from 'react'
//import { Shoplogin } from './ShopFunction'
import UserLogin from "./UserLogin";
import Admin from "./AdminLogin";
import Login from "./ShopLogin";

 function Signin () {
 
return(
         <div className="container">
            <div>
                <Login />
            </div>
            <div>
                <UserLogin />
            </div>
        </div>
);
};
export default Signin;
