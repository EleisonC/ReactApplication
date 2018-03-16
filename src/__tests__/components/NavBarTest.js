import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import Navbar from "../../components/nav";

global.localStorage = {
  setItem: () => {},
  getItem: () => {}
 };

describe('<Navbar />', () => {
  const store = configureMockStore([thunk])({
    auth: [],
    categories:{},
    recipes: []
  });

  it('should render itself without crashing', () => {
    const { enzymeWrapper } = mount(<Provider store={store} ><MemoryRouter><Navbar/></MemoryRouter></Provider>);
  });
});