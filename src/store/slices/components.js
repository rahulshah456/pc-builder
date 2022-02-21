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

      //updating selection variables
      const oldComponent = state.RigComponents[type];
      oldComponent.price = Math.round(component.price);
      oldComponent.name = component.name;
      oldComponent.isSelected = true;
      oldComponent.image = component.image;
      oldComponent.qty = 1;

    },
    removeSelection(state, actions) {
      
      //selected component type
      const type = actions.payload;

      //clear selection variables
      const component = state.RigComponents[type];
      component.price = component.name = component.image = undefined;
      component.isSelected = false;
      component.qty = 0;

    }
  }
});

//actions
export const componentsActions = componentsSlice.actions;

//reducer
export default componentsSlice.reducer;