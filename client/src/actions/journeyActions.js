import * as types from './actionTypes';
import trainlineApi from '../api/trainlineApi';
import * as applicationActions from './applicationActions';

export function loadJourney(id, step) {
  return function(dispatch) {
    dispatch(applicationActions.startLoading());
    return trainlineApi.getJourney(id, step).then(journey => {
      
      console.log(journey);
      setTimeout(function (){
        dispatch(loadJourneySuccess(journey));
        dispatch(applicationActions.stopLoading());
      }, 2000);

    }).catch(error => {
      dispatch(applicationActions.stopLoading());
      throw(error);
    });
  };
}

export function loadJourneySuccess(journey) {
  return {type: types.JOURNEY_LOADED, journey};
}