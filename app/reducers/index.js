import { combineReducers } from 'redux'

import breedsReducer from './breedsReducer'
import titleReducer from './titleReducer'

const rootReducer = combineReducers({
  breeds: breedsReducer,
  title: titleReducer,
});

export default rootReducer
