import { call, put, select } from "redux-saga/effects";
import { registerNewUser } from "../auth/auth.saga";
import { transformToString } from "../utils";
import { storeIsLoadingValue } from "./registration-form.actions";
import { selectRegistrationFormValues } from "./values/registration-values.selectors";

export function* setIsLoadingValueSaga(action) {
  yield put(storeIsLoadingValue(action.payload));
}

export function* submitRegisterFormSaga() {
  const userInfo = yield select(selectRegistrationFormValues);
  const registrationDoc = document.implementation.createDocument(null, `user`);
  const nameNode = document.createElementNS(null, "first_name");
  nameNode.appendChild(document.createTextNode(userInfo.name));
  registrationDoc.documentElement.appendChild(nameNode);

  const lastNameNode = document.createElementNS(null, "last_name");
  lastNameNode.appendChild(document.createTextNode(userInfo.lastname));
  registrationDoc.documentElement.appendChild(lastNameNode);

  const emailNode = document.createElementNS(null, "email");
  emailNode.appendChild(document.createTextNode(userInfo.email));
  registrationDoc.documentElement.appendChild(emailNode);

  const passwordNode = document.createElementNS(null, "password");
  passwordNode.appendChild(document.createTextNode(userInfo.password));
  registrationDoc.documentElement.appendChild(passwordNode);

  const role = document.createElementNS(null, "role");
  role.appendChild(document.createTextNode("ROLE_SLUZBENIK"));
  registrationDoc.documentElement.appendChild(role);

  const transformes = transformToString(registrationDoc);

  const registrationString = new XMLSerializer().serializeToString(
    registrationDoc
  );

  try {
    yield call(registerNewUser, registrationString);
  } catch (e) {
    console.error(e);
  }
}
