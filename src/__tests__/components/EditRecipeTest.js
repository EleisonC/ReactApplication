import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import EditRecipe from "../../components/dashboard/recipes/editRecipe";

global.localStorage = {
  setItem: () => {},
  getItem: () => {}
 };

describe('<EditRecipe />', () => {
  const store = configureMockStore([thunk])({
    auth: [],
    categories:{},
    recipes: []
  });
  const props = {
      match: {
          params:{
            categoryId:1,
            recipeId:1
          }
      },
      actions: {
        ViewRecipe: jest.fn((numb) => {Promise.resolve("categories")})
      }
  }
  const preventDefault = jest.fn();
  const component = mount(<Provider store={store} ><MemoryRouter><EditRecipe {...props}/></MemoryRouter></Provider>);
  it('should render itself without crashing', () => {
    const { enzymeWrapper } = mount(<Provider store={store} ><MemoryRouter><EditRecipe {...props}/></MemoryRouter></Provider>);
  });
  it('should render form', () => {
    expect(component.find('form').length).toBe(1);
    expect(component.find('form').simulate("submit", { preventDefault }));
    expect(preventDefault).toBeCalled();
});

});