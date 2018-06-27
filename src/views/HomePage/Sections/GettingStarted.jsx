import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

//Style
import gettingStartedStyle from "assets/jss/material-kit-react/views/landingPageSections/gettingStartedStyle.jsx"


//components
import ActionTable from "./ActionTable.jsx"

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import StateMap from "components/Maps/StateMap.jsx";
import Button from "components/CustomButtons/Button.jsx";
import SwipeableViews from 'react-swipeable-views';


class GettingStarted extends React.Component {

  state = {
    swipeIndex:0,
    selectedState:null,
  }

  setSelected = (selectedFilter) => {
    this.setState({selectedFilter})
  }

  handleClick = (state) => {
    this.setState({selectedState: state, swipeIndex: 1})
  }

  setSwipeIndex = (index) => {
    this.setState({swipeIndex: index})
  }

  render(){

    const {swipeIndex, selectedState } = this.state;
    const {classes} = this.props

    return(
    <div className={classes.section}>

      <SwipeableViews
      index={swipeIndex}
      >
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title}>Let's Get Started </h2>
              <h5 className={classes.description}>
                Cannabis industry regulatations are complex. Select the state which you plan
                to do operate in to find out what services buddle can offer.
              </h5>
          </GridItem>

        <StateMap
            handleClick={this.handleClick}
            setSelected={this.setSelected}
           />
        </GridContainer>

        <ActionTable
          setSwipeIndex={this.setSwipeIndex}
          selectedState={selectedState}
         />

       </SwipeableViews>
      </div>

    )
  }
}

export default withStyles(gettingStartedStyle)(GettingStarted)
