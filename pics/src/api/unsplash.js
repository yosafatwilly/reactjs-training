import axios from 'axios';

export default axios.create({
  baseURL : 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID 53e22346471cf2b4c7def00b482f3ad473338c510b22dd36ab891111a0db70e1'
  }
})