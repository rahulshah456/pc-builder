import { createSlice } from "@reduxjs/toolkit";
import { RIG_COMPONENTS as RigComponents } from "../../core/constants";

//initial values
let initialState = { RigComponents };

//def
const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    addComponent(state, actions) {},
    updateComponent(state, actions) {},
    removeComponent(state, actions) {},
    updateSelection(state, actions) {},
    removeSelection(state, actions) {}
  }
});

//actions
export const componentsActions = componentsSlice.actions;

//reducer
export default componentsSlice.reducer;