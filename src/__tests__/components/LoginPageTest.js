import Enzyme, { render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import Login from "../../components/authentication/Login";

describe('<Login />', () => {
  const store = configureMockStore([thunk])({
    auth: {}
  });
  const preventDefault = jest.fn();
  const component = mount(<Provider store={store} ><MemoryRouter><Login /></MemoryRouter></Provider>);
  it('should render itself without crashing', () => {
    const { enzymeWrapper } = render(<Provider store={store} ><MemoryRouter><Login /></MemoryRouter></Provider>);
  });
  it('should render form', () => {
    expect(component.find('form').length).toBe(1);
    expect(component.find('form').simulate("submit", { preventDefault }));
    expect(preventDefault).toBeCalled();
});
});