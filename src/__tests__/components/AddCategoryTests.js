import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { shallowToJson } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

import React, { Component } from 'react';
import CreateCategory from "../../components/dashboard/categories/createCategory";

global.localStorage = {
  setItem: () => {},
  getItem: () => {}
 };

describe('<CreateCategory />', () => {
  const store = configureMockStore([thunk])({
    auth: [],
    categories:{},
    recipes: []
  });
  const preventDefault = jest.fn();
  const component = mount(<Provider store={store} ><MemoryRouter><CreateCategory /></MemoryRouter></Provider>);
  it('should render itself without crashing', () => {
    const { enzymeWrapper } = mount(<Provider store={store} ><MemoryRouter><CreateCategory/></MemoryRouter></Provider>);
  });
  it('should render form', () => {
    expect(component.find('form').length).toBe(1);
    expect(component.find('form').simulate("submit", { preventDefault }));
    expect(preventDefault).toBeCalled();
});
});