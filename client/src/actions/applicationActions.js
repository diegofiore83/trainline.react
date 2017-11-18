import * as types from './actionTypes';
import locationApi from '../api/locationApi';

export function setGeoLocation() {
  return function(dispatch) {
    return locationApi.getGeoLocation().then(location => {
      
        dispatch(setGeoLocationSuccess(location));

    }).catch(error => {
      throw(error);
    });
  };
}

export function setGeoLocationSuccess(location) {
  return {type: types.SET_LOCATION_SUCCESS, location};
}

export function startLoading() { 
  return {type: types.IS_LOADING, loading: true};
}
  
export function stopLoading() {
  return {type: types.IS_LOADING, loading: false};
}
  
export function changeDevice(width) {
  if (width <= 769) {
    return {type: types.CHANGE_DEVICE, device: "mobile"};
  }
    
  if (width <= 1024) {
    return {type: types.CHANGE_DEVICE, device: "tablet"};
  }
      
  return {type: types.CHANGE_DEVICE, device: "desktop"};
}