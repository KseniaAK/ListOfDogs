import { combineReducers } from 'redux'

import breedsReducer from './breedsReducer'

const rootReducer = combineReducers({
  breeds: breedsReducer,
});

export default rootReducer
