import React from 'react';
import { mount, shallow } from 'enzyme';
import ConnectedApp, { App } from './App';

const defaultProps = {
  onSetGeolocation: f => f,
  onLoadJourney: f => f
};

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App {...defaultProps}/>);
  });
});