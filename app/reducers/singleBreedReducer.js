import { SELECT_BREED } from '../actions/index'

export default function(state = '', action) {
  switch(action.type) {
    case SELECT_BREED:
      return action.breed
    default: 
      return state
  }
}