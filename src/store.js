import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { KEY_LOCAL_THEME } from "./core/constants";


const persistedTheme = localStorage.getItem(KEY_LOCAL_THEME);

let initialState = {
  globalReducer: persistedTheme ? JSON.parse(persistedTheme) : {},
};

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  const globalReducer = store.getState().globalReducer;
  if (!globalReducer) return;

  localStorage.setItem(KEY_LOCAL_THEME, JSON.stringify(globalReducer));
});

export default store;