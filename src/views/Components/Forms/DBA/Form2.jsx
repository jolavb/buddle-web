import React from 'react';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import CustomDropDown from 'components/CustomDropdown/CustomDropdown.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";


class Form2 extends React.Component {

  render(){
    return(
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4} lg={3}>

          <CustomInput
          labelText="First Name"
          id="float"
          formControlProps={{
            fullWidth: true
          }}
          />

          <CustomInput
          labelText="Last Name"
          id="float"
          formControlProps={{
            fullWidth: true
          }}
          />

          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default Form2;
