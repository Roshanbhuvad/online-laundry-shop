import React from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import NavBar from "./components/NavBar";
import NearByShops from "./components/mapNearbyStores";
import Signin from "./components/Signin";
//import UserLogin from "./components/UserLogin";
//import Profile from "./components/ShopProfile";

import Register from "./components/ShopRegister";
import UserRegister from "./components/UserRegister";
import Profile from "./components/ShopProfile";
//import Admin from "./components/AdminLogin";
import Pickup from "./components/Pickup";
import Data from "./components/table";
import UpdateShop from "./components/UpdateShop";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CallbackPage from "./components/callback";
import Auth from "./components/Auth";

export default function App() {
  return (
    <div>
  
      <div className="content">
      <BrowserRouter>
        <NavBar />
          <Route path="/" exact component={LandingPage} />
          <Route path="/book/:selectedstoreId" component = {Data}/>
          <Route path="/nearby" component={NearByShops} />
          <Route exact path="/shops/registershop" component={Register} />
          <Route exact path="/user/registercustomer" component={UserRegister} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/shop/profile" component={Profile} />
          <Route exact path="/book/:customerId" component={Pickup} />
          <Route exact path="/shops/:myid" component={UpdateShop} />
        </BrowserRouter>
      </div>
    </div>
  );
}
