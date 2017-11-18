import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function journeyReducer(state = initialState.journey, action) {
  switch (action.type) {
    case types.JOURNEY_LOADED:
      return action.journey;
    default:
      return state;
  }
}