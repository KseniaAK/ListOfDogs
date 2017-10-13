import {
  SELECT_BREED,
  DISPLAY_CHUNK
} from '../actions/index'

export default function(state = {}, action) {
  switch(action.type) {
    case DISPLAY_CHUNK:
      const breedsToDisplay = getBreedsFromRange(action)
      return breedsToDisplay

    case SELECT_BREED:
      const cleanState = Object.assign({}, state)
      // select single breed, deselect all others
      Object.keys(cleanState).forEach((breedName) => {
        cleanState[breedName].isSelected = (breedName === action.breedToSelect)
      })
      return cleanState
      
    default: 
      return state
  }
}

function getBreedsFromRange(action) {
  const breedsToDisplay = {}
  const allBreeds = getAllBreeds(action.breeds)
  
  for (let i = action.begin; i < action.end; i++) {
    // break out if there are less breeds than desired
    if (!allBreeds[i]) break
    const breedName = capitalizeBreedName(allBreeds[i])
    
    breedsToDisplay[breedName] = {
      options: hasOptions(action, allBreeds[i]) ? getOptions(action, allBreeds[i]) : null,
      isSelected: false
    }
  }
  
  return breedsToDisplay
}

function hasOptions(action, breedName) {
  return action.breeds[breedName].length > 0
}

function getOptions(action, breedName) {
  return action.breeds[breedName]
}

function capitalizeBreedName(breed) {
  return breed.charAt(0).toUpperCase() + breed.slice(1).toLowerCase()
}

function getAllBreeds(breeds) {
  return Object.keys(breeds).map((breed) => breed)
}

function selectSingleBreed(state, breedToSelect) {
  const cleanState = Object.assign({}, state)
  Object.keys(cleanState).forEach((breedName) => {
    if (breedName === breedToSelect)
    cleanState[breedName].isSelected = false
  })
  return cleanState
}