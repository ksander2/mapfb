import { combineReducers } from 'redux';
import * as constants from '../actions/constants';

const points = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_POINT:
      return [...state, action.payload];
    case constants.REMOVE_POINT:
      return state.filter(point => point.id !== action.payload);
    case constants.UPDATE_POINT: {
      const pointInfo = action.payload;
      const newPoints = state.map(point => {
        if (point.id === pointInfo.id) {
          point.coordinate = pointInfo.coordinate;
        }
        return point;
      });
      return newPoints;
    }
    case constants.REORDER_POINTS:
      return action.payload;
    default:
      return state;
  }
};

const centerMap = (state = [55.751574, 37.573856], action) => {
  switch (action.type) {
    case constants.SET_CENTER_MAP:
      return action.payload;
    default:
      return state;
  }
};

const mapState = (state = { isLoaded: false }, action) => {
  switch (action.type) {
    case constants.MAP_LOAD_SUCCESS:
      return { isLoaded: true };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  points,
  centerMap,
  mapState,
});
