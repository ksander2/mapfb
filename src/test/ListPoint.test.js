import React from 'react';
import { createStore } from 'redux';
import { rootReducer } from '../reducers/index';
import { addPoint } from '../actions/index';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListPoint from '../containers/ListPoint';

configure({ adapter: new Adapter() });

describe('test InputPointField', () => {
  const store = createStore(rootReducer);

  store.dispatch(addPoint({ name: 'foo', id: 0, coordinate: [55.0, 37.1] }));
  store.dispatch(addPoint({ name: 'bar', id: 1, coordinate: [56.0, 38.1] }));
  store.dispatch(addPoint({ name: 'fizz', id: 2, coordinate: [57.0, 39.1] }));

  const wrapper = mount(<ListPoint store={store} />);

  it('Should match lenght points array', () => {
    expect(store.getState().points.length).toEqual(3);
    const listPoints = wrapper.find('.list-points-item');
    expect(listPoints.length).toBe(3);
  });

  it('Should match lenght points array, after delete, simulate event', () => {
    const pointItem = wrapper.find('.list-points-item').at(1);
    const deleteSpan = pointItem.find('span');
    deleteSpan.simulate('click');
    expect(store.getState().points.length).toEqual(2);
  });
});
