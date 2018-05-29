import React from 'react';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import CustomDropDown from 'components/CustomDropdown/CustomDropdown.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";


class Form3 extends React.Component {

  render(){
    return(
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4} lg={3}>

          <CustomInput
          labelText="Favorite Color"
          id="float"
          formControlProps={{
            fullWidth: true
          }}
          />

          <CustomInput
          labelText="Favorite Dog"
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

export default Form3;
