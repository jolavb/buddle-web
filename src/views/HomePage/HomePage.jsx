import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import SwipeableViews from 'react-swipeable-views';


import HeaderLinks from "components/Header/HeaderLinks.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import buddleLogo from "assets/img/buddle-logo.png";
import Parallax from "components/Parallax/Parallax.jsx";
import StateMap from "components/Maps/StateMap.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import ActionTable from "./Sections/ActionTable.jsx"


const dashboardRoutes = [];

class HomePage extends React.Component {

  state = {
    selectedFilter: null,
    swipeIndex:0,
    selectedState:null,
  }

  setSelected = (selectedFilter) => {
    this.setState({selectedFilter})
  }

  handleClick = (state) => {
    console.log(state)
    this.setState({selectedState: state, swipeIndex: 1})
  }

  setSwipeIndex = (index) => {
    this.setState({swipeIndex: index})
  }

  render() {
    const { classes, ...rest } = this.props;
    const {selectedFilter, swipeIndex, selectedState } = this.state;

    return (
      <div>

      <Header
            color="transparent"
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
                  Buddle helps you and your team navigate the complexities of cannabis
                  industry by providing the tools, expertise, and up to date information required
                  to operate your budding business.
                </h4>
                <br />
                <Button
                  type="button"
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                > Let's Get Started!
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
          <ProductSection />

          <SwipeableViews
          index={swipeIndex}
          >
              <StateMap
                handleClick={this.handleClick}
                setSelected={this.setSelected}
                selectedFilter={selectedFilter}
               />

            <ActionTable
              setSwipeIndex={this.setSwipeIndex}
              selectedState={selectedState}
             />

           </SwipeableViews>
          </div>
        </div>

      </div>
    )
  }
}

export default withStyles(landingPageStyle)(HomePage)
