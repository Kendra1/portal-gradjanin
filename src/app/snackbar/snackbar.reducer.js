import { combineReducers } from 'redux';
import { STORE_SNACKBAR_MESSAGES, CLEAR_SNACKBAR_MESSAGES } from './snackbar.constants';

const initialState = {
  messages: [],
};

export const _messagesReducer = (
  state = initialState.messages,
  action,
) => {
  if (action.type === STORE_SNACKBAR_MESSAGES) {
    return action.payload;
  } else if (action.type === CLEAR_SNACKBAR_MESSAGES) {
    return [];
  }
  return state;
};

export const snackbarReducer = combineReducers({
  messages: _messagesReducer,
});
