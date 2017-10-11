import { REQUEST_PICS,
  RECEIVE_PICS
} from '../actions/index'

export default function(
  state = {
    isFetching: false,
    pics: []
  },
  action
) {
  switch(action.type) {
    case REQUEST_PICS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_PICS:
      return Object.assign({}, state, {
        isFetching: false,
        pics: action.pics
      })
    default:
      return state
  }
}