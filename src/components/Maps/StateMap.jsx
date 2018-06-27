import React from 'react';
import Select from "react-select";
import stateLegality from "./stateLegality";


import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";

import usStatesJson from "./cb_2017_us_state_500k.json";

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const recreationalStyle = {
  fill: "green",
  stroke: "#607D8B",
  strokeWidth: 0.3,
  outline: "none",
}

const medicalStyle = {
  fill: "blue",
  stroke: "#607D8B",
  strokeWidth: 0.3,
  outline: "none",
}


const defaultStyle = {
  fill: "#02adc1",
  stroke: "#607D8B",
  strokeWidth: 0.3,
  outline: "none",
}


class StateMap extends React.Component {


  handleGeoClick = (geo) => {
    const {handleClick} = this.props
    handleClick(geo)
  }

  getFilteredStyle = (geo) => {
    const { selectedFilter } = this.props;
    const state = geo.properties.STUSPS

    if (stateLegality.med.includes(state)){
      return medicalStyle
    } else if(stateLegality.rec.includes(state)){
      return recreationalStyle
    } else {
      return defaultStyle
    }

    
    
    // if (selectedFilter && selectedFilter.value.includes(state)) {
    //   return legalStyle
    // }


    // return defaultStyle
  }


  render(){

    const {setSelected, selectedFilter, handleClick} = this.props;


    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
          scale: 250,
          }}
          width={960}
          height={600}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <ZoomableGroup disablePanning={true} zoom={5} center={[-95,35]}>
          <Geographies geography={ usStatesJson }>
            {(geographies, projection) => geographies.map(geography =>
              <Geography
                onClick={ ()=> {this.handleGeoClick(geography)} }
                key={ geography.properties.STATEFP }
                geography={ geography.geometry }
                projection={ projection }
                style={{
                  default: this.getFilteredStyle(geography),
                  hover: {
                    fill: "#0befa2",
                    stroke: "#0befa2",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                  pressed: {
                    fill: "#FF5722",
                    stroke: "#607D8B",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                }}
                />
            )}
          </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}



export default StateMap
