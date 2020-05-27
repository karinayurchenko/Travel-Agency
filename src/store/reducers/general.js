import { TOGGLE_SIDEBAR } from '../actions/general';

const initialState = {
  sidebarOpened: false,
  manual: false,
};

const generalReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR: {
      console.log(action.payload);
      const manual = (action.payload === undefined ? !state.manual : state.manual);
      const modified = (action.payload === undefined ? !state.sidebarOpened : action.payload || manual);
      return {
        ...state,
        sidebarOpened: modified,
        manual,
      };
    }
    default:
      return state;
  }
};

export default generalReducers;
