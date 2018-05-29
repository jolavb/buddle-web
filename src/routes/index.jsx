import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import HomePage from "views/HomePage/HomePage.jsx";
import Incorporate from "views/Incorporate/Incorporate.jsx";

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/Components", name: "Components", component: Components },
  { path: "/Incorporate", name: "Incorporate", component: Incorporate },
  {path: "/", name: "Home", component: HomePage },
];

export default indexRoutes;
