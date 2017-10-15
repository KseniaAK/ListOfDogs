import { combineReducers } from 'redux'

import breedsReducer from './breedsReducer'
import titleReducer from './titleReducer'
import breedsToDisplayReducer from './breedsToDisplayReducer'
import picsReducer from './picsReducer'
import searchBarReducer from './searchBarReducer'

const rootReducer = combineReducers({
  textSearchResults: breedsReducer,
  title: titleReducer,
  displayedBreeds: breedsToDisplayReducer,
  pictureSearchResults: picsReducer,
  searchInput: searchBarReducer,
});

export default rootReducer
