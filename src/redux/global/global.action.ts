import GlobalActionTypes from './global.types';

export const showLoading = () => async (dispatch: any) => {
  dispatch({ type: GlobalActionTypes.SHOW_LOADING });
};

export const hideLoading = () => async (dispatch: any) => {
  dispatch({ type: GlobalActionTypes.HIDE_LOADING });
};

export const showLoadingButton = () => async (dispatch: any) => {
  dispatch({ type: GlobalActionTypes.SHOW_LOADING_BUTTON });
};

export const hideLoadingButton = () => async (dispatch: any) => {
  dispatch({ type: GlobalActionTypes.HIDE_LOADING_BUTTON });
};
