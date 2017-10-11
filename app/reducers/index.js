import { combineReducers } from 'redux'

import breedsReducer from './breedsReducer'
import titleReducer from './titleReducer'
import singleBreedReducer from './singleBreedReducer'
import picsReducer from './picsReducer'

const rootReducer = combineReducers({
  breeds: breedsReducer,
  title: titleReducer,
  selectedBreed: singleBreedReducer,
  pics: picsReducer,
});

export default rootReducer
