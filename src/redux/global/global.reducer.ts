import GlobalActionTypes from "./global.types";

interface GlobalState {
  loading: boolean;
  loadingButton: boolean;
}

const INITIAL_STATE: GlobalState = {
  loading: false,
  loadingButton: false,
};

const GlobalReducer = (state = INITIAL_STATE, action: any): GlobalState => {
  switch (action.type) {
    case GlobalActionTypes.SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GlobalActionTypes.HIDE_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GlobalActionTypes.SHOW_LOADING_BUTTON:
      return {
        ...state,
        loadingButton: true,
      };
    case GlobalActionTypes.HIDE_LOADING_BUTTON:
      return {
        ...state,
        loadingButton: false,
      };
    default:
      return state;
  }
};

export default GlobalReducer;
