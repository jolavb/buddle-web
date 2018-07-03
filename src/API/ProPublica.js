import axios from "axios";


export const proPublica =  {
  fetchRepsByState: function(state){
    return axios.get(`https://api.propublica.org/congress/v1/members/house/${state}/current.json`,
      {headers: {'X-API-KEY': "Z6fIKalQQI3wH3bbxsCZ5GT96BTuKqs2IGJa78oB"}}
    )
  }
}
