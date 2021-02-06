import { combineReducers } from "redux";

import { STORE_IS_LOADING_VALUE } from "./login-form.constants";
import { loginFormValuesReducer } from "./values/login-values.reducer";
import { loginFormErrorsReducer } from "./errors/login-errors.reducer";

const initialState = {
  isLoading: false,
};

const _isLoadingReducer = (state = initialState.isLoading, action) => {
  if (action.type === STORE_IS_LOADING_VALUE) {
    return action.payload;
  }
  return state;
};

export const loginFormReducer = combineReducers({
  userCredentials: loginFormValuesReducer,
  errors: loginFormErrorsReducer,
  isLoading: _isLoadingReducer,
});
