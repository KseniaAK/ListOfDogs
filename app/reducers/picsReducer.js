import { REQUEST_PICS,
  RECEIVE_PICS
} from '../actions/index'

export default function(
  state = {
    isFetching: false,
    show: false,
    pics: []
  },
  action
) {
  switch(action.type) {
    case REQUEST_PICS:
      return Object.assign({}, state, {
        isFetching: true,
        show: true
      })
    case RECEIVE_PICS:
      return Object.assign({}, state, {
        isFetching: false,
        show: true,
        pics: action.pics
      })
    default:
      return state
  }
}