import { STORE_INIT_COMPLETE, INIT_APP } from './init.constants';

export const storeInitComplete = () => ({
  type: STORE_INIT_COMPLETE,
});

export const initApp = () => ({
  type: INIT_APP,
});
