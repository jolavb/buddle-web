import React from 'react';
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


class StateMap extends React.Component {

  handleGeoClick = (geo) => {
    console.log(geo.properties.NAME)
  }

  render(){

    console.log(usStatesJson)
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
          <ZoomableGroup  disablePanning={true} zoom={5} center={[-95,35]}>
          <Geographies geography={ usStatesJson }>
            {(geographies, projection) => geographies.map(geography =>
              <Geography
                onClick={ ()=> {this.handleGeoClick(geography)} }
                key={ geography.id }
                geography={ geography.geometry }
                projection={ projection }
                style={{
                    default: {
                      fill: "#02adc1",
                      stroke: "#607D8B",
                      strokeWidth: 0.3,
                      outline: "none",
                    },
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
