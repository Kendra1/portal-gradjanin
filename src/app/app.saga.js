import { all, fork } from "redux-saga/effects";
import { authWatcherSaga } from "./auth/auth.saga-watchers";
import { initAppSaga } from "./init/init.saga";
import { watchLoginFormSaga } from "./login-form/login-form.saga-watcher";
import { watchLoginFormValuesSaga } from "./login-form/values/login-values.saga-watcher";
import { watchRegistrationFormValuesSaga } from "./registration-form/values/registration-values.saga-watcher";
import { watchOfficialSaga } from "./official/official.saga-watcher";
import { watchCitizenSaga } from "./citizen/citizen.saga-watcher";
import { watchRegistrationFormSaga } from "./registration-form/registration-form.saga-watcher";

export function* rootSaga() {
  yield all(
    [
      authWatcherSaga,
      initAppSaga,
      watchLoginFormSaga,
      watchLoginFormValuesSaga,
      watchRegistrationFormValuesSaga,
      watchRegistrationFormSaga,
      watchOfficialSaga,
      watchCitizenSaga,
    ].map(fork)
  );
}
