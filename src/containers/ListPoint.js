import { connect } from 'react-redux';
import ListPoint from '../components/ListPoint';
import { removePoint, reorderPoints } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  reorderPointsAction: points => dispatch(reorderPoints(points)),
  removePointAction: pointId => dispatch(removePoint(pointId)),
});

const mapStateToProps = store => {
  return {
    points: store.points,
  };
};

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPoint);

export default container;
