import { TOGGLE_DRAWER } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  showDrawer: false,
});

function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return state.set('showDrawer', !state.get('showDrawer'));
    default:
      return state;
  }
}

export default navigationReducer;
