import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

import HeaderLinks from "components/Header/HeaderLinks.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import buddleLogo from "assets/img/buddle-logo.png";
import Parallax from "components/Parallax/Parallax.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";



const dashboardRoutes = [];


class HomePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={<img style={{height: 40}} src={buddleLogo} alt='Buddle' /> }
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/background-team.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Legal Services for your Budding Business</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
                <br />
                <Button
                  type="button"
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                > How Can We Help?
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
          <ProductSection

           />
          </div>
        </div>

      </div>
    )
  }
}

export default withStyles(landingPageStyle)(HomePage)
