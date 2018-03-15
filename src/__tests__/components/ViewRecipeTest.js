import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import ViewRecipe from "../../components/dashboard/recipes/viewRecipe";

global.localStorage = {
  setItem: () => {},
  getItem: () => {}
 };

describe('<ViewRecipe />', () => {
  const store = configureMockStore([thunk])({
    auth: [],
    categories:{},
    recipes: []
  });
  const props = {
      match: {
          params:{
              categoryId: 1,
              recipeId: 1
          }
      },
      actions: {
          ViewRecipe: jest.fn((numb) => {Promise.resolve("recipes")})
        }
  }
  it('should render itself without crashing', () => {
    const { enzymeWrapper } = mount(<Provider store={store} ><MemoryRouter><ViewRecipe {...props}/></MemoryRouter></Provider>);
  });
});