import { createSlice } from "@reduxjs/toolkit";
import { addTask, fetchTasks, toggleCompleted } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const isPendingAction = (action) => {
  return action.type.endsWith("/pending");
};

const isRejectAction = (action) => {
  return action.type.endsWith("/rejected");
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchTasks.pending, handlePending)
      // .addCase(addTask.pending, handlePending)
      // .addCase(toggleCompleted.pending, handlePending)

      // .addCase(fetchTasks.rejected, handleRejected)
      // .addCase(addTask.rejected, handleRejected)
      // .addCase(toggleCompleted.rejected, handleRejected)

      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items[index].completed = !state.items[index].completed;
      })
      // It is new one instead 26, 27 and 28 line:
      .addMatcher(isPendingAction, handlePending)
      // It is new one instead 29, 30 and 31 line:

      .addMatcher(isRejectAction, handleRejected)

      // if anybody do something what do nothing, its default func or sth like that. It's better when it will never happens :D
      .addDefaultCase((state, action) => {
        state.error = "someone used old function, fix it!";
      });
  },
  // extraReducers: {
  //   [fetchTasks.pending]: handlePending,
  //   [addTask.pending]: handlePending,
  //   [toggleCompleted.pending]: handlePending,
  //   [fetchTasks.rejected]: handleRejected,
  //   [addTask.rejected]: handleRejected,
  //   [toggleCompleted.rejected]: handleRejected,
  //   [fetchTasks.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [addTask.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.push(action.payload);
  //   },
  //   [toggleCompleted.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       (task) => task.id === action.payload.id
  //     );
  //     state.items[index].completed = !state.items[index].completed;
  //   },
  // },
});

export const tasksReducer = tasksSlice.reducer;
