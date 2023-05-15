import axios from "axios";

axios.defaults.baseURL = "https://goit-task-menager.herokuapp.com/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};
