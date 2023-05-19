import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://goit-task-menager.herokuapp.com/";

// Setting auth token
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Cleaning token
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

// POST @ /users/signup
// body: {name, email, password }

export const register = createAsyncThunk(
  'auth/register', 
  async(credentials, thunkAPI) => {
    try {
const response = await axios.post('/users/signup', credentials);
// setAuthHeader(response.data.token)
return response.data
    } catch (e){
      return thunkAPI.rejectWithValue(e.message)
    }
  }
);


export const logIn = createAsyncThunk(
  'auth/logIn',
  async(credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials)
      setAuthHeader(response.data.token)
      return response.data

          } catch (e){
            return thunkAPI.rejectWithValue(e.message)
          }
  }
) ;
// export const logOut ;
// export const refreshUser;
