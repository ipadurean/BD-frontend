import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Containers/Home';

describe("Home", () => {
  const props = {user: 1}
  const app = shallow(<Home {...props} />);

  it ("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it ("initializes the `state` with a null selectedDriver and a null presentTrips", () => {
    expect(app.state().selectedDriver).toBe(null);
    expect(app.state().presentTrips).toBe(null);
  })

});