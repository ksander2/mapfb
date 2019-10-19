import { connect } from 'react-redux';
import MapBasics from '../components/MapBasic';
import { setCenterMap, mapLoadSuccess, updatePoint } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  setCenterMapAction: centerCoordinate =>
    dispatch(setCenterMap(centerCoordinate)),
  mapLoadSuccessAction: isLoaded => dispatch(mapLoadSuccess(isLoaded)),
  dragPointOnMapAction: pointInfo => dispatch(updatePoint(pointInfo)),
});

const mapStateToProps = store => {
  return {
    points: store.points,
    centerMap: store.centerMap,
    isLoaded: store.mapState.isLoaded,
  };
};

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapBasics);

export default container;
