import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import ViewRecipes from '../../components/dashboard/recipes/viewRecipes';

global.localStorage = {
  setItem: () => {},
  getItem: () => {},
};

describe('<ViewRecipes />', () => {
  const store = configureMockStore([thunk])({
    auth: [],
    categories: {},
    recipes: {
      has_next: true,
      has_prev: false,
      next_page: 'http://127.0.0.1:5000/view_recipes/20/?page=2',
      previous_page: null,
      recipes: [
        {
          category: 20,
          date_created: 'Thu, 08 Mar 2018 14:20:44 GMT',
          date_modified: 'Thu, 08 Mar 2018 14:20:44 GMT',
          instructions: 'its a very good meal',
          recipe_id: 13,
          recipe_name: 'Rice',
        },
        {
          category: 20,
          date_created: 'Thu, 08 Mar 2018 11:48:22 GMT',
          date_modified: 'Thu, 08 Mar 2018 11:48:22 GMT',
          instructions: 'its really good',
          recipe_id: 12,
          recipe_name: 'Doof soup',
        },
        {
          category: 20,
          date_created: 'Thu, 08 Mar 2018 11:46:48 GMT',
          date_modified: 'Thu, 08 Mar 2018 11:46:48 GMT',
          instructions: 'its really nice',
          recipe_id: 11,
          recipe_name: 'Good soup',
        },
      ],
    },
  });
  const props = {
    match: {
      params: {
        id: 1,
        name: 'bread',
      },
    },
    actions: {
      ViewRecipes: jest.fn((numb) => { Promise.resolve('categories'); }),
    },
  };
  const preventDefault = jest.fn();
  const component = mount(<Provider store={store} ><MemoryRouter><ViewRecipes {...props} /></MemoryRouter></Provider>);
  it('should render itself without crashing', () => {
    const { enzymeWrapper } = mount(<Provider store={store} ><MemoryRouter><ViewRecipes {...props} /></MemoryRouter></Provider>);
  });
  it('should render form', () => {
    expect(component.find('form').length).toBe(1);
    expect(component.find('form').simulate('submit', { preventDefault }));
    expect(preventDefault).toBeCalled();
  });
});
