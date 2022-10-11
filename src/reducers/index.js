import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';

const rootReducer = combineReducers({
  contactsData: contactsReducer,
});

export default rootReducer;
