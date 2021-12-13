import { KEY_LOCAL_THEME } from "../core/constants";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./slices/global";
import componentsReducer from "./slices/components";

//create store with multiple reducers
const store = configureStore({
  reducer: {
    global: globalReducer, 
    components: componentsReducer,
  }
});


//saving global reducer changes to local storage
store.subscribe(() => {
  const reducer = store.getState().global;
  if (!reducer) return;
  localStorage.setItem(KEY_LOCAL_THEME, JSON.stringify(reducer));
});

export default store;