import * as constants from './constants';

export const addPoint = point => ({
  type: constants.ADD_POINT,
  payload: point,
});

export const reorderPoints = points => ({
  type: constants.REORDER_POINTS,
  payload: points,
});

export const removePoint = pointId => ({
  type: constants.REMOVE_POINT,
  payload: pointId,
});

export const updatePoint = pointInfo => ({
  type: constants.UPDATE_POINT,
  payload: pointInfo,
});

export const setCenterMap = center => ({
  type: constants.SET_CENTER_MAP,
  payload: center,
});

export const mapLoadSuccess = () => ({
  type: constants.MAP_LOAD_SUCCESS,
});
