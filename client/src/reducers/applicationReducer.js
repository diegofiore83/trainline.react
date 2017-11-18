import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function applicationReducer(state = initialState.application, action) {
  switch (action.type) {
    case types.CHANGE_DEVICE:
      return Object.assign({}, state, { device: action.device });
    case types.IS_LOADING:
      return Object.assign({}, state, { loading: action.loading });
    case types.SET_LOCATION_SUCCESS:
      return Object.assign({}, state, { location: action.location });
    default:
      return state;
  }
}