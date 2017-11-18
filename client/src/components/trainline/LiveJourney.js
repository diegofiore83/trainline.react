import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import utility from '../../common/Utility';

import train from '../../ui/train.svg';
import loader from '../../ui/loader.svg';
import livetrain from '../../ui/live-train.svg';
import './LiveJourney.css';

class LiveJourney extends React.Component {

  render() {
    let { journey, loading } = this.props;
    let { loadingHtml, journeyResumeHtml, callingPointsHtml, noJourneyHtml } = {...[null, null, null, null]};
  
    if (journey !== null) {
      journeyResumeHtml = <h3 className="LiveJourney-Title">
              <div>{journey.origin}</div>
              <span className="LiveJourney-SubTitle">to</span>
              {journey.destination}
          </h3>;
      let currentStopFound = false;
      callingPointsHtml = journey.callingPoints.map((callingPoint, i, array) =>
          <li className={callingPoint.hasOwnProperty('actual') ? 'LiveJourney-CallingPoint actual' : 'LiveJourney-CallingPoint' } key={i}>
              <div className="LiveJourney-CallingPointTime">
                  <div className="LiveJourney-CallingPointScheduledTime">
                      {callingPoint.scheduled}
                  </div>
                  <div className={callingPoint.hasOwnProperty('actual') ? 'LiveJourney-CallingPointExpectedTime departed' : 'LiveJourney-CallingPointExpectedTime late'}>
                      {callingPoint.scheduled === callingPoint.expected ? '' : <span>{callingPoint.expected}</span>}
                  </div>
              </div>
              <div className="LiveJourney-CallingPointStation">
                  {
                    !currentStopFound && !callingPoint.hasOwnProperty('actual') ? 
                    <img src={livetrain} className={i === 0 ? "LiveJourney-CallingPoint-LiveTrain origin" : "LiveJourney-CallingPoint-LiveTrain"} alt="live-train" /> :
                    <span></span>
                  }
                  {
                    !currentStopFound && !callingPoint.hasOwnProperty('actual') ?
                    currentStopFound = true :
                    <span></span>
                  }
                  {
                    i === array.length-1 && !currentStopFound ?
                    <img src={livetrain} className="LiveJourney-CallingPoint-LiveTrain destination" alt="live-train" /> :
                    <span></span>
                  }
                  <div className="LiveJourney-CallingPointName">
                      {callingPoint.station}
                  </div>
                  <div className={callingPoint.hasOwnProperty('actual') ? 'LiveJourney-CallingPointDue departed' : 'LiveJourney-CallingPointDue late'}>
                      {callingPoint.scheduled === callingPoint.expected ? <span className="departed">{utility.getDelay(callingPoint.scheduled, callingPoint.expected)}</span> : <span>{utility.getDelay(callingPoint.scheduled, callingPoint.expected)}</span>}
                  </div>
                  <div className="LiveJourney-CallingPointPlatform">
                      Platform {callingPoint.platform}
                  </div>
              </div>
          </li>
      );
    }
    else {
      noJourneyHtml = <div className="LiveJourney-NoResults">No journey to show</div>
    }

    if (loading) {
      loadingHtml = <img src={loader} className="LiveJourney-Loading" alt="loading" />
    } 
    else {
      loadingHtml = <img src={train} className="LiveJourney-Icon" alt="train" />
    }

    return (
      <div className="LiveJourney">
        {loadingHtml}
        {journeyResumeHtml}
        <ul className="LiveJourney-CallingPoints">
            {callingPointsHtml}
        </ul>
        {noJourneyHtml}
      </div>
    );
  }
}

LiveJourney.propTypes = {
  journey: PropTypes.object,
  loading: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    journey: state.journey,
    loading: state.application.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveJourney);
