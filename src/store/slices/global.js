import { createSlice } from "@reduxjs/toolkit";
import { KEY_LOCAL_THEME } from "../../core/constants";

//values inside local storage
const persistedTheme = localStorage.getItem(KEY_LOCAL_THEME);

//initial values
let initialState = {
  GlobalReducer: persistedTheme ? JSON.parse(persistedTheme) : {},
};

//def
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.darkThemeEnabled = !state.darkThemeEnabled;
    }
  }
});

//actions
export const globalActions = globalSlice.actions;

//reducer
export default globalSlice.reducer;