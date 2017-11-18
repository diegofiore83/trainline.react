import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ResolutionDetect from './components/shared/ResolutionDetect';
import LiveJourney from './components/trainline/LiveJourney';

import { setGeoLocation } from './actions/applicationActions';
import { loadJourney } from './actions/journeyActions';

import logo from './ui/logo.svg';

import './App.css';

export class App extends Component {
  componentWillMount() {
    const { onSetGeolocation, onLoadJourney } = this.props;

    onSetGeolocation();
    onLoadJourney('1', 'A');
  }

  render() {
    const { onLoadJourney } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Live Journey</h1>
        </header>
        <LiveJourney />
        <ResolutionDetect />
        <input className="App-button" type="button" value="13:50" onClick={() => {onLoadJourney('1','A');}} />
        <input className="App-button" type="button" value="14:30" onClick={() => {onLoadJourney('1','B');}} />
        <input className="App-button" type="button" value="15:38" onClick={() => {onLoadJourney('1','C');}} />
        <input className="App-button" type="button" value="15:55" onClick={() => {onLoadJourney('1','D');}} />
        <input className="App-button" type="button" value="16:15" onClick={() => {onLoadJourney('1','E');}}  />
        <input className="App-button" type="button" value="16:30" onClick={() => {onLoadJourney('1','F');}}  />
      </div>
    );
  }
}

App.propTypes = {
  onSetGeolocation: PropTypes.func,
  onLoadJourney: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSetGeolocation: () => dispatch(setGeoLocation()),
    onLoadJourney: (id, step) => dispatch(loadJourney(id, step))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
