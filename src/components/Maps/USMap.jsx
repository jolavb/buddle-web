import React from "react";
import * as d3 from "d3";
import * as topojson from "topojson";
import us_states from "./us_states.topojson";
import { geoAlbersUsa,  geoPath } from "d3-geo";
import _ from "lodash";



class USMap extends React.Component{
  
  state= {
    stateData: [],
  }


  projection() {
    return geoAlbersUsa()
      .scale(1000)
      .translate([ 800 / 2, 450 / 2 ])
  }


  stateClicked(feature){
    const {handleClick} = this.props
    const {properties} = feature
    const name = properties["states.STATE_NAME"]
    const abbr = properties["states.STATE_ABBR"]
    handleClick([{name, abbr}])
  }


  getFillStyle(feature){
    const {states} = this.props;
    const {properties} = feature
    const abbr = properties["states.STATE_ABBR"]
    const state = _.find(states, (s)=> s.abr === abbr)

    const status = state? state.status : ""

    if (status === "rec"){
      return "#01a1ad"
    } else if(status === "med"){
      return "#a4d9dc"
    } else{
      return "#00000054"
    }
      
  }


  componentDidMount(){
    this.loadMap()
  }


 
  loadMap(){
    d3.json(us_states)
      .then(( us )=>{
        this.setState({ stateData: topojson.feature(us, us.objects.us_states).features})
      })
  }


  render(){
    return (
      <svg viewBox=" 0 0 800 450">
        <g className="states">
          {
            
            this.state.stateData.map((d,i)=>{

              const copyd = _.cloneDeep(d)
              copyd.geometry.geometries.shift()
             
              return (
              <path
              onClick={()=>this.stateClicked(d)}
              key={`path-${i}`}
              d={geoPath().projection(this.projection())(copyd)}
              className="state"
              fill={this.getFillStyle(d)}
              stroke="#607D8B"
              strokeWidth={ 0.5 }
              >
              </path>
            )})
          }
        </g>


      </svg>

    )



  }
}

export default USMap;
