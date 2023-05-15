import persistReducer from "redux-persist/es/persistReducer";
import { filtersReducer } from "./reducer";
import { tasksReducer } from "./taskSlice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { authReducer } from "./auth/slice";

const { configureStore } = require("@reduxjs/toolkit");

const authPersistConfig = {
  // In this key it will be saved info about user so its worth if this key and key in strage under be the same
  key: "auth",
  // its default in persist. It's localstorage
  storage,
  whitelist: ["token"],
};

// I don't want to refresh site if one of this elems will be done
const middleware = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};

// After using resist I dont need to read data from initial state after every refresh site, so I must change store
// I must add auth
export const store = configureStore({
  reducer: {
    // persistReducer gets two args: config and base reducer (used to persist the state)
    auth: persistReducer(authPersistConfig, authReducer),
    tasks: tasksReducer,
    filters: filtersReducer,
  },
  // I write it to no refresh app after routing some data:
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
