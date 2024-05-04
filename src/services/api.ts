import axios from "axios";

const api = axios.create({
  baseURL: 'http://capacitacao.byronsolutions.com:8000/'
})

export default api;