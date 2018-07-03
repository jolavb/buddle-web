
import axios from "axios"
import { baseUrl, confirmSuccessUrl } from "API/config";

export const BuddleAPI = {
  fetchStateInfo: ()=>{
    return axios.get(`${baseUrl}states`)
  },
  updateStateInfo: (data, id)=> {
    return axios.patch(`${baseUrl}states/${id}`, data)
  }, 
  sendMessage: (messageData) =>{
    return axios.post(`${baseUrl}message`, messageData)
  }
}
