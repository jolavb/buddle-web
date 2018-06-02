import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import { Link, withRouter } from "react-router-dom";

// My Components
import Login from "views/Authentication/Login.jsx";
import Registration from "views/Authentication/Registration.jsx";

import HomePage from "views/HomePage/HomePage.jsx";
import Incorporate from "views/Incorporate/Incorporate.jsx";


var indexRoutes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Registration },
  {path: "/", name: "Home", component: withRouter(HomePage) },
  { path: "/Incorporate", name: "Incorporate", component: Incorporate },
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/Components", name: "Components", component: Components },
];

export default indexRoutes;
