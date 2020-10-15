import { all } from 'redux-saga/effects'

import authentication from './authentication/sagas'
import profile from './profile/sagas'

export default function* rootSaga(): Generator {
  return yield all([authentication, profile])
}
