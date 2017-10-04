import { combineReducers } from 'redux';
import { UPDATE_TITLE } from 'actions/sample';

const data = (
  state = {
    title: '',
  },
  action
) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title
      };
    default:
      return state;
  }
};

export default data;
