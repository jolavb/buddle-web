import React from 'react';
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";


class ActionTable extends React.Component{

  render(){
    const {setSwipeIndex, selectedState} = this.props
    return (
      <div style={Object.assign({})}>
        <KeyboardArrowLeft onClick={()=> {setSwipeIndex(0)}} style={{color:'black', fontSize:'35px'}} />
        <h1 style={{color:'black', display:'inline'}}> {selectedState}</h1>
      </div>
    )
  }

}


export default ActionTable
