import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  value: 0
}

const counterReducers = {
  increaseValue: (state) => void(state.value++),
  decreaseValue: (state) => void(state.value--),
  increaseValueAsync: (state, action) => void(state.value += action.payload || 1),
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: counterReducers
})

export const {increaseValue, decreaseValue, increaseValueAsync} = counterSlice.actions;

//Async functions
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(increaseValueAsync(amount));
  }, 2000);
};

export default counterSlice;