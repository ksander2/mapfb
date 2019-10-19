import { connect } from 'react-redux';
import InputPointField from '../components/InputPointField';
import { addPoint } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  addPointAction: point => dispatch(addPoint(point)),
});

const mapStateToProps = store => {
  return {
    points: store.points,
    centerMap: store.centerMap,
  };
};

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputPointField);

export default container;
