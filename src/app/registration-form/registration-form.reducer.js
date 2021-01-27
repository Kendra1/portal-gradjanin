import { combineReducers } from "redux";

import { STORE_IS_LOADING_VALUE } from "./registration-form.constants";
import { registrationFormValuesReducer } from "./values/registration-values.reducer";
import { registrationFormErrorsReducer } from "./errors/registration-errors.reducer";

const initialState = {
  isLoading: false,
};

const _isLoadingReducer = (
  state = initialState.isLoading,
  action
) => {
  if (action.type === STORE_IS_LOADING_VALUE) {
    return action.payload;
  }
  return state;
};

export const registrationFormReducer = combineReducers({
  userInfo: registrationFormValuesReducer,
  isLoading: _isLoadingReducer,
  errors: registrationFormErrorsReducer,
});
