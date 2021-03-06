import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectRoute = () => state => state.get('route');

const selectQuery = () => createSelector(
  selectRoute(),
  (routeState) => routeState.getIn(['locationBeforeTransitions', 'query']).toJS()
);

const selectQuerySize = () => createSelector(
  selectRoute(),
  (routeState) => routeState.getIn(['locationBeforeTransitions', 'query']).size
);

const selectShowDrawer = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('showDrawer')
);

// selectLocationState expects a plain JS object for the routing state
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectLocationState,
  selectShowDrawer,
  selectGlobal,
  selectQuery,
  selectQuerySize,
};
