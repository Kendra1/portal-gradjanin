import { createSelector } from 'reselect';

const _selectIsInitComplete = (state) => state.init.isInitComplete;

export const selectIsInitComplete = createSelector([_selectIsInitComplete], (isComplete) => isComplete);
