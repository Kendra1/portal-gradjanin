import { combineReducers } from 'redux';
import { STORE_INIT_COMPLETE } from './init.constants';

const initialState = {
  isInitComplete: false,
};

const initCompleteReducer = (
  state = initialState.isInitComplete,
  action,
) => {
  if (action.type === STORE_INIT_COMPLETE) {
    return true;
  }

  return state;
};

export const initReducer = combineReducers({
  isInitComplete: initCompleteReducer,
});
