import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import HomePage from "views/HomePage/HomePage.jsx";
import Incorporate from "views/Incorporate/Incorporate.jsx";
import AboutPage  from "views/AboutPage/About.jsx";
import Branding from "views/ServicesPages/Branding.jsx"
import { Route, Switch } from "react-router-dom";
import React from "react";


// var indexRoutes = [
//   {path: "/Branding", name: "Branding", component: Branding },
//   {path: "/License&Compliance", name: "LicenseCompliance", component: Branding },
//   {path: "/Business-Formation", name: "BusinessFormation", component: Branding },
//   { path: "/landing-page", name: "LandingPage", component: LandingPage },
//   { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
//   { path: "/login-page", name: "LoginPage", component: LoginPage },
//   { path: "/Components", name: "Components", component: Components },
//   { path: "/Incorporate", name: "Incorporate", component: Incorporate },
//   {path: "/About", name:"About", component: AboutPage },
//   {path: "/", name: "Home", component: HomePage },
// ];


class IndexRoutes extends React.Component{
  

  render(){
    const { classes, ...rest} = this.props;

    return (
      <div>
        
        <Route path="/About" name="about" component={AboutPage} />
        <Route path="/Branding" name="services" component={Branding} />
        <Route exact path="/" name="home" component={HomePage} />
        {/* <Route path="/Business-Formation" name="services" component={BusinessFormation} />
        <Route path="/License-Compliance" name="services" component={LicenseCompliance} /> */}
      </div>
  
    )

  }
}


export default IndexRoutes;
