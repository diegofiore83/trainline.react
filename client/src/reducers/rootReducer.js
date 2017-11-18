import { combineReducers } from 'redux';

import application from './applicationReducer';
import journey from './journeyReducer';

const rootReducer = combineReducers({
  application,
  journey
});

export default rootReducer;