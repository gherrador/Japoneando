import axios from 'axios';
const URL_BASE = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URL_PROD : process.env.REACT_APP_API_URL_DEV
axios.defaults.withCredentials = true
export const listProducts = async(id) => {
  if (id) {
    const url = `${URL_BASE}/products/category/${id}`;
    let query = await axios.get(url)
    return query.data

  } else {
    const url = `${URL_BASE}/products/list/`;
    let query = await axios.get(url)
    return query.data
  }
}

export const listById = async(id) => {
  const url = `${URL_BASE}/products/detail/${id}`;
  let query = await axios.get(url)
  return query.data
}

export const addProduct = async (data) => {
  const url = `${URL_BASE}/products/save`;
  await axios.post(url, data)
}

export const deleteProduct = async (id) => {
  const url = `${URL_BASE}/products/delete/${id}`;
  const query = await axios.delete(url)  
  return query.data
}

export const updateProduct = async (data, id) => {
  const url = `${URL_BASE}/products/update/${id}`;
  await axios.put(url, data)
}

