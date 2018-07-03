import React from 'react';
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

// material-ui components
import {withStyles, Table, TableBody, TableCell, TableHead, TableRow }from "material-ui";
// import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Block from "@material-ui/icons/Block";
import {proPublica} from "API/ProPublica.js";
import _ from "lodash";
import ContactForm from "components/Forms/ContactForm";

//Style
import gettingStartedStyle from "assets/jss/material-kit-react/views/landingPageSections/gettingStartedStyle.jsx";

//theme components
import Button from "components/CustomButtons/Button.jsx";

class ActionTable extends React.Component{

  state = {
    reps: null,
    dialogOpen:false,
    contactCat:null,
  }

  componentDidUpdate(prevProps){
    const {selectedState} = this.props
    const {abbr} = selectedState[0] || {};

    if(prevProps.selectedState[0][abbr] !== abbr){
        proPublica.fetchRepsByState(abbr)
          .then((r)=>{
            this.setState({reps: r.data.results})
          })
    }
  }

  handleServiceClick = (service) => {
    this.setState({dialogOpen: true, contactCat: service})
  }

  


  renderReps(){
    const {reps} = this.state

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell> Party </TableCell>
            <TableCell> Role </TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
          {_.map(reps, (r) => {
            return (
              <TableRow key={r.id}>
                <TableCell>{r.name}</TableCell>
                <TableCell>{r.party}</TableCell>
                <TableCell>{r.role}</TableCell>
              </TableRow>
            )
          })
        }

          </TableBody>
      </Table>

    )

  }



  render(){

    const {setSwipeIndex, selectedState, states, classes} = this.props
    const { reps, dialogOpen, contactCat }= this.state

    const { name } = selectedState[0] || {};
    const buddleStateInfo = _.find(states, (s) => s.name === name )





    return (
      <div>
        <h2 className={classes.title}>
        <KeyboardArrowLeft className={classes.title} style={{fontSize:40, margin:0, verticalAlign:"text-bottom"}} onClick={()=> {setSwipeIndex(0)}} />
        {name}
        </h2>

        {
          buddleStateInfo? (
            <p style={{marginBottom: 40}} className={classes.description}>
              {buddleStateInfo.desc}
            </p>
          ) : (
            null
          )
        }

        <h5 className={classes.description}>
          Services Offered in {name}.
        </h5>


        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Services for {name}</TableCell>
              <TableCell> Status </TableCell>
              <TableCell> </TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Incorporation</TableCell>
                <TableCell><CheckCircle style={{color:'green'}}/></TableCell>
                <TableCell>
                  <Button
                  onClick={()=>{this.handleServiceClick('inc')}}
                  >
                    Find Out More.
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Intellectual Propery</TableCell>
                <TableCell><Block style={{color:'red'}}/></TableCell>
                <TableCell>
                  <Button
                   onClick={()=>{this.handleServiceClick('property')}}
                  >
                    Find Out More.
                  </Button>
                </TableCell>
              </TableRow>

            </TableBody>
        </Table>
        <ContactForm
          contactCat={contactCat}
          dialogOpen={dialogOpen}
          handleServiceClick={this.handleServiceClick}
          handleDialogClose={()=>{this.setState({dialogOpen: false})}}
        />
      <h2 className={classes.title}> Contact Your Representative </h2>
      {this.renderReps()}

      </div>

    )
  }

}


export default withStyles(gettingStartedStyle)(ActionTable)
