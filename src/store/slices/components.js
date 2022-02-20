import { createSlice } from "@reduxjs/toolkit";
import { RIG_COMPONENTS_NEW as RigComponents } from "../../core/constants";

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
    updateSelection(state, actions) {
      
      //selected component payload
      const component = actions.payload.component;
      const type = actions.payload.type;

      //updating selected variables
      const oldComponent = state.RigComponents[type];
      oldComponent.price = Math.round(component.price);
      oldComponent.name = component.name;
      oldComponent.isSelected = true;
      oldComponent.image = component.image;
      oldComponent.qty = 1;

      //applying changes to state component
      state.RigComponents[type] = oldComponent;

    },
    removeSelection(state, actions) {
      
    }
  }
});

//actions
export const componentsActions = componentsSlice.actions;

//reducer
export default componentsSlice.reducer;