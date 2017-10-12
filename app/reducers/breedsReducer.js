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
      return Object.assign({}, state, {
        isFetching: false,
        breeds: action.breeds
      })
    
    default:
      return state
  }
}