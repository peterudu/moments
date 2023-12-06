import axios from "axios";

axios.defaults.baseURL = 'https://djangoframework-api-7834ad396166.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();