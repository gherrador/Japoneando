import axios from 'axios';
const URL_BASE = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URL_PROD : process.env.REACT_APP_API_URL_DEV
axios.defaults.withCredentials = true
export const userLogin = async(data) => {
  const url = `${URL_BASE}/login`;
  let query = await axios.post(url, data)
  return query.data
}

export const registerUser = async(data) => {
  const url = `${URL_BASE}/signup`;
  let query = await axios.post(url, data)
  return query.data
}

export const logOutUser = async() => {
  const url = `${URL_BASE}/logout`
  let query = await axios.post(url)
  return query.data
}
export const getLogedUser = async() => {  
  const url = `${URL_BASE}/user`
  let query = await axios.get(url)
  return query.data
}

