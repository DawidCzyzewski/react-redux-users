// Operations takes dispatch and give back other function

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//   fetchingError,
//   fetchingInProgress,
//   fetchingSuccess,
// } from "./taskSlice";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// export const fetchTasks = () => async (dispatch) => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get("/tasks");
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }

// Instead of writing it like abrove, I can use createAsyncThung. It will generate whole three states: pending, fulfilled and rejected. It takes two things: 1. type of action I will want to do, 2. async function what will happens when success. In async function (payload creator) I can get two arguments: prop needed when initiated (for example id) and second thunkAPI. It is object sending to async generator actions in asyncThung. Here I can get to store

// TIP: when I have something what I won't use like in async "arg", I can use floor, else programmers will know that I don't want this arg used
// export const fetchTasks = createAsyncThunk(
//   "tasks/fetchAll",
//   async (arg, thunkAPI) => {

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
