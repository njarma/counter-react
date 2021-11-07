import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  loading: false
}

const counterReducers = {
  increaseValue: (state) => void(state.value++),
  decreaseValue: (state) => void(state.value--),
  increaseValueAsync: (state, action) => void(state.value += action.payload || 1),
  setLoading: (state, action) => void(state.loading = action.payload)
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: counterReducers
})

export const {increaseValue, decreaseValue, increaseValueAsync, setLoading} = counterSlice.actions;

//Async functions
export const incrementAsync = amount => dispatch => {
  dispatch(setLoading(true));
  setTimeout(() => {
    dispatch(increaseValueAsync(amount));
    dispatch(setLoading(false));
  }, 2000);
};

export default counterSlice;