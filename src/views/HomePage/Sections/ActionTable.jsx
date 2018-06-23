import React from 'react';
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

// material-ui components
import {withStyles, Table, TableBody, TableCell, TableHead, TableRow }from "material-ui";
// import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Block from "@material-ui/icons/Block";


//Style
import gettingStartedStyle from "assets/jss/material-kit-react/views/landingPageSections/gettingStartedStyle.jsx";

//theme components
import Button from "components/CustomButtons/Button.jsx";

class ActionTable extends React.Component{

  render(){
    const {setSwipeIndex, selectedState, classes} = this.props
    return (
      <div>
        <h2 className={classes.title}>
        <KeyboardArrowLeft className={classes.title} style={{fontSize:40, margin:0, verticalAlign:"text-bottom"}} onClick={()=> {setSwipeIndex(0)}} />
        {selectedState} Services
        </h2>
        <h5 className={classes.description}>
          Services Offered in {selectedState}.
        </h5>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Services for {selectedState}</TableCell>
              <TableCell> Status </TableCell>
              <TableCell> </TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Incorporation</TableCell>
                <TableCell><CheckCircle style={{color:'green'}}/></TableCell>
                <TableCell>
                  <Button>
                    Find Out More.
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Intellectual Propery</TableCell>
                <TableCell><Block style={{color:'red'}}/></TableCell>
                <TableCell>
                  <Button>
                    Find Out More.
                  </Button>
                </TableCell>
              </TableRow>

            </TableBody>
        </Table>
      </div>
    )
  }

}


export default withStyles(gettingStartedStyle)(ActionTable)
