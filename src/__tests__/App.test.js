import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe("App", () => {
  const app = shallow(<App />);

  it ("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it ("initializes the `state` with an empty list of drivers and an empty user object", () => {
    expect(app.state().drivers).toEqual([]);
    expect(app.state().user).toEqual({});
  })

  it ("initializes the `state` with a false filter and a false loggedIn", () => {
    expect(app.state().filter).toBe(false);
    expect(app.state().loggedIn).toBe(false);
  })

});

