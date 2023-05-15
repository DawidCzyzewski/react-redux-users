
import { filtersReducer } from "./reducer";

import { tasksReducer } from "./taskSlice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
