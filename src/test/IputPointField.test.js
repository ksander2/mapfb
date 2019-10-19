import React from 'react';
import { createStore } from 'redux';
import { rootReducer } from '../reducers/index';
import { setCenterMap } from '../actions/index';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputPointField from '../containers/InputPointField';

configure({ adapter: new Adapter() });

describe('test InputPointField', () => {
  const store = createStore(rootReducer);
  const wrapper = mount(<InputPointField store={store} />);
  const inputControl = wrapper.find('#input-point');

  it('Should match first points array state lenghtt 0', () => {
    expect(store.getState().points.length).toEqual(0);
  });

  it('Should match first point after add point, simulate event', () => {
    const coordinate = [56.018833, 92.849997];

    store.dispatch(setCenterMap(coordinate));

    inputControl.simulate('focus');
    inputControl.simulate('change', { target: { value: 'foo' } });
    inputControl.simulate('keypress', { key: 'Enter' });

    expect(store.getState().points.length).toEqual(1);
    expect(store.getState().points[0]['coordinate']).toEqual(coordinate);
  });
});
