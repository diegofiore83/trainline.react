import * as actions from './applicationActions';
import * as types from './ActionTypes';

/* Action Creators */
describe('Application Actions', () => {
  it('should create an action to start loading', () => {
    const expectedAction = { type: types.IS_LOADING, loading: true };
    expect(actions.startLoading()).toEqual(expectedAction);
  });

  it('should create an action to stop loading', () => {
    const expectedAction = { type: types.IS_LOADING, loading: false };
    expect(actions.stopLoading()).toEqual(expectedAction);
  });
  
  it('should create an action to set device mode', () => {
    const expectedAction = { type: types.CHANGE_DEVICE, device: "mobile" };
    expect(actions.changeDevice(380)).toEqual(expectedAction);
  });
  
  it('should create an action to set device mode', () => {
    const expectedAction = { type: types.CHANGE_DEVICE, device: "tablet" };
    expect(actions.changeDevice(800)).toEqual(expectedAction);
  });
  
  it('should create an action to set device mode', () => {
    const expectedAction = { type: types.CHANGE_DEVICE, device: "desktop" };
    expect(actions.changeDevice(2048)).toEqual(expectedAction);
  });
})