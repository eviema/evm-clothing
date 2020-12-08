// Why root saga?

// If we have multiple sagas to run,
// without root saga, i.e. one large saga,
// we'll have to call sagaMiddleware.run(sagaName)
// multiple times in redux/store.js.
// With root saga, only one such call is needed.

import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
  // Equivalent to above, but less popular:
  // yield all([fetchCollectionsStart()]);
}
