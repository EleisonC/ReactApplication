import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import EditCategory from "../../components/dashboard/categories/editCategory";

global.localStorage = {
  setItem: () => {},
  getItem: () => {}
 };

describe('<EditCategory />', () => {
  const store = configureMockStore([thunk])({
    auth: [],
    categories:{},
    recipes: []
  });
  const props = {
      match: {
          params:{
              id: 1,
              name:"bread"
          }
      }
  }
  const preventDefault = jest.fn();
  const component = mount(<Provider store={store} ><MemoryRouter><EditCategory {...props}/></MemoryRouter></Provider>);
  it('should render itself without crashing', () => {
    const { enzymeWrapper } = mount(<Provider store={store} ><MemoryRouter><EditCategory {...props}/></MemoryRouter></Provider>);
  });
  it('should render form', () => {
    expect(component.find('form').length).toBe(1);
    expect(component.find('form').simulate("submit", { preventDefault }));
    expect(preventDefault).toBeCalled();
});
});