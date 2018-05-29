import React from "react";
import Steps from "components/Steps/Steps";
import classNames from "classnames";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import { withStyles } from "material-ui";
import { Map } from "immutable";


//Forms
import DBAName from "views/Components/Forms/DBA/DBAName";
import Form2 from "views/Components/Forms/DBA/Form2";
import Form3 from "views/Components/Forms/DBA/Form3";


class Incorporate extends React.Component{

  state = {
    SectionOne: Map({
      businessName: "",
      firstTime: "true",
      state: null,
      registrationNumber: null,
      changeRegNumber: 'true',
    }),
    form2: {},
    form3: {},
  }

  handleChange = (form, name) =>  event => {
    let changedValue = event === null? null: event.value

    if (name !== "state"){
      changedValue = event.target.value
    }

    let updated = this.state[form].set(name, changedValue)
     this.setState({[form]: updated})
   };


  render(){
    const { classes } = this.props;
    const {SectionOne, form2, form3 } = this.state;

    return (

    <div className={classNames(classes.main, classes.mainRaised)}>
      <Steps
        steps={["DBA Name", "Business Info","Leadership", "Tax Info" ]}
        stepContent={[
          <DBAName
          values={SectionOne}
          handleChange={this.handleChange}
          />,
          <Form2 />,
          <Form3 />]}
       />
    </div>
    )
  }
}

export default withStyles(componentsStyle)(Incorporate);
