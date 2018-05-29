import React from 'react';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import CustomDropDown from 'components/CustomDropdown/CustomDropdown.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import {Radio, FormControl, FormLabel, RadioGroup, FormControlLabel, FormGroup} from "material-ui";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import _ from 'lodash';
import styles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";
import withStyles from "material-ui/styles/withStyles";
import classNames from "classnames";

const States = require('./../states.js');


class DBAName extends React.Component {

  render(){
    const {values, handleChange, classes} = this.props;

    const optionValues = _.map(States, (val,key)=>{
      return {value: val, label:key}
    })

    return(
      <div>
        <GridContainer style={{margin:0}}>
          <GridItem xs={12} sm={4} md={4} lg={3}>
          <FormControl margin="normal">
            <FormLabel>What will you call your new business?</FormLabel>
            <FormGroup>
              <CustomInput
              labelText="Business Name"
              id="float"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                value: values.get('businessName'),
                onChange: handleChange("SectionOne", "businessName")
              }}
              />
            </FormGroup>
          </FormControl>


          <FormControl margin="normal">
            <FormLabel> Is this the first time you've registered a business name?
            </FormLabel>
            <RadioGroup
            row
            value={values.get("firstTime")}
            onChange={handleChange("SectionOne","firstTime")}
            >
            <FormControlLabel value={"true"} control={<Radio classes={{checked: classes.radio}} />} label="Yes" />
            <FormControlLabel value={"false"} control={<Radio classes={{checked: classes.radio}} />} label="No" />
            </RadioGroup>
          </FormControl>

          {
            values.get('firstTime') === 'false' ? (
              <div style={{marginLeft: 25}}>
              <FormControl margin="normal" >
                <FormLabel> Change Existing Registration Number?
                </FormLabel>
                <RadioGroup
                row
                value={values.get("changeRegNumber")}
                onChange={handleChange("SectionOne","changeRegNumber")}
                >
                <FormControlLabel value={"true"} control={<Radio classes={{checked: classes.radio}}/>} label="Yes" />
                <FormControlLabel value={"false"} control={<Radio classes={{checked: classes.radio}} />} label="No" />
                </RadioGroup>
              </FormControl>

              <FormControl margin="dense">
                <FormLabel>Please Enter Your Existing Registration Number</FormLabel>
                <FormGroup>
                  <CustomInput
                  labelText="Registration Number"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: 'number',
                    value: values.get('registrationNumber'),
                    onChange: handleChange("SectionOne", "registrationNumber")
                  }}
                  />
                </FormGroup>
              </FormControl>
              </div>
            ) : (null)
          }


          <FormControl margin="normal">
            <FormLabel> Which State will you register in?
            </FormLabel>
            <FormGroup>
              <Select
              value={values.get('state')}
              onChange={handleChange("SectionOne","state")}
              options={optionValues}
              />
            </FormGroup>
          </FormControl>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(styles)(DBAName);
