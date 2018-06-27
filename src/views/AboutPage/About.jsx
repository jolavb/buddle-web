import React from "react";
import TeamSection from "views/Components/Sections/TeamSection";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import classNames from "classnames";
import withStyles from "material-ui/styles/withStyles";

//Header
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Header from "components/Header/Header.jsx";
import buddleLogo from "assets/img/buddle-logo.png";

const dashboardRoutes = [];

class AboutPage extends React.Component{

    render(){
        const { classes, ...rest } = this.props;

        console.log(this.props)

        return (
        <div>
            <Header
                color="white"
                brand={<img style={{height: 40}} src={buddleLogo} alt='Buddle' /> }
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                height: 400,
                color: "white"
                }}
                {...rest}
            />

            <div className={classNames(classes.main)}>
            <div className={classes.container}>
                
                
                <TeamSection />
            </div>
            </div>
        </div>
        )
    }
}

export default withStyles(landingPageStyle)(AboutPage);