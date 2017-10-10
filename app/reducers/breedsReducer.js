import { CHANGE_BREEDS } from '../actions/index'

export default function(state = [], action) {
  switch(action.type) {
    case CHANGE_BREEDS:
      const firstTwelveBreeds = Object.keys(action.breeds).map((breed) => {
        return breed.charAt(0).toUpperCase() + breed.slice(1)
      }).slice(0, 12)
      return firstTwelveBreeds
    
    default:
      return state
  }
}