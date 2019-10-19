import React from 'react';
import { createStore } from 'redux';
import { rootReducer } from '../reducers/index';
import { addPoint } from '../actions/index';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MapBasics from '../containers/MapBasic';

configure({ adapter: new Adapter() });

describe('test InputPointField', () => {
  const store = createStore(rootReducer);

  it('Should map render', () => {
    store.dispatch(addPoint({ name: 'foo', id: 0, coordinate: [55.0, 37.1] }));
    mount(<MapBasics store={store} />);
  });
});
