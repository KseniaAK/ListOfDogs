import { READ_USER_INPUT } from '../actions/index'

export default function(state = '', action) {
  switch(action.type) {
    case READ_USER_INPUT: 
      return action.input

    default:
      return state
  }
}