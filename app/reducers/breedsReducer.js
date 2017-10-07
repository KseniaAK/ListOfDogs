import { CHANGE_BREEDS } from '../actions/index'

export default function(state = [], action) {
  switch(action.type) {
    case CHANGE_BREEDS:
      const firstTwelveBreeds = Object.keys(action.breeds).map((breed) => breed).slice(0, 12)
      return firstTwelveBreeds
    
    default:
      return state
  }
}