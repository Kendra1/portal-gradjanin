import { call, cancelled, select } from "redux-saga/effects";
import axios from "axios";

import { selectLoggedUserToken } from "../auth/auth.selectors";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "",
  headers: {
    "Content-Type": "application/xml",
    Accept: "application/xml",
  },
});

export default function* apiRequest(requestInfo) {
  const token = yield select(selectLoggedUserToken);
  const cancelSource = yield call([
    axios.CancelToken,
    axios.CancelToken.source,
  ]);
  try {
    const response = yield call([api, api.request], {
      url: requestInfo.uri,
      method: requestInfo.method,
      params: requestInfo.params,
      data: requestInfo.data,
      cancelToken: cancelSource.token,
      responseType: requestInfo.responseType
        ? requestInfo.responseType
        : undefined,
      headers: {
        Authorization: `${token}`,
      },
      ...requestInfo.overrides,
    });

    return response.data;
  } catch (e) {
    // maybe do some error transformation here
    throw e;
  } finally {
    if (yield cancelled()) {
      // cancel api call if task is cancelled
      yield call([cancelSource, cancelSource.cancel]);
    }
  }
}
