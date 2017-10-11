import {
  REQUEST_ALL_BREEDS,
  RECEIVE_ALL_BREEDS
} from '../actions/index'

export default function(state = {
  isFetching: false,
  breeds: []
}, action) {
  switch(action.type) {
    case REQUEST_ALL_BREEDS:
      return Object.assign({}, state, {
        isFetching: true
      })
      
    case RECEIVE_ALL_BREEDS:
      const firstTwelveBreeds = Object.keys(action.breeds).map((breed) => {
        return breed.charAt(0).toUpperCase() + breed.slice(1)
      }).slice(0, 12)
      return Object.assign({}, state, {
        isFetching: false,
        breeds: firstTwelveBreeds
      })
    
    default:
      return state
  }
}