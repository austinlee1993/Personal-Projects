import authReducer from './authReducer'
import thoughtReducer from './thoughtReducer'
import { combineReducers } from 'redux'
import { firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  thought: thoughtReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer