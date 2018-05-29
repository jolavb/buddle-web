
import React from 'react';
import { withStyles, Stepper, Step, StepLabel, Paper, Card} from "material-ui";
import classNames from "classnames";
import Button from 'components/CustomButtons/Button.jsx';
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";


class Steps extends React.Component{

  state = {
    activeStep : 0,
    stepLabels: ['Form 1', 'Form 2', 'Review']
  }

  handleNext = () => {
      const { activeStep } = this.state;
      this.setState({
        activeStep: activeStep + 1
      });
    };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  }

  render() {
    const { activeStep } = this.state;
    const { classes, steps, stepContent} = this.props;


    return(
      <div>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label} >
                <StepLabel>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        <div>
        {stepContent[activeStep]}
        </div>
        <div style={{float:"right"}}>
          <Button
              variant="raised"
              color="primary"
              disabled={activeStep === 0}
              onClick={this.handleBack}
          >Back
          </Button>

          <Button
            type="button"
            variant="raised"
            color="rose"
            onClick={this.handleNext}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
        </div>
    )
  }
}


export default withStyles(componentsStyle)(Steps);
