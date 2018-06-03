import React from 'react';
import Select from "react-select";

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

const filteredStyle = {
  fill: "red",
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
    console.log(geo.properties)
  }

  getFilteredStyle = (geo) => {
    const { selectedFilter } = this.props;
    console.log(selectedFilter)
    const state = geo.properties.STUSPS

    if (selectedFilter && selectedFilter.value.includes(state)) {
      return filteredStyle
    }
    return defaultStyle
  }


  render(){

    const {setSelected, selectedFilter} = this.props;

    return (
      <div style={wrapperStyles}>
      <Select
      value={selectedFilter}
      onChange={(selected)=> {setSelected(selected)}}
      options= {[
        {value:["CA", "CO"], label: "Legalized"},
        {value:["NY", "CA", "ME", "RI"], label: "Medical Only"},
      ]}
      />
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
          <Geographies disableOptimization geography={ usStatesJson }>
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
