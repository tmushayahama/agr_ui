import {Set, fromJS} from 'immutable';
import {PAGE_LOADING} from '../actions/loadingActions';

const DEFAULT_STATE = fromJS({
  pageLoading: false,
  pendingRequests: Set(),
});

const loadingReducer = (state = DEFAULT_STATE, action) => {
  // handle generic fetch request/response actions generated by createFetchAction
  const match = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(action.type);
  if (match) {
    const [, requestAction, requestType] = match;
    if (requestType === 'REQUEST') {
      return state.update('pendingRequests', reqs => reqs.add(requestAction));
    } else {
      return state.update('pendingRequests', reqs => reqs.delete(requestAction));
    }
  }

  // handle specific action types
  switch (action.type) {
  case PAGE_LOADING:
    return state.set('pageLoading', action.payload);
  default:
    return state;
  }
};

export default loadingReducer;