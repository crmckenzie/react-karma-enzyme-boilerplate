import React from 'react'
import App from 'App'
import { shallow } from 'enzyme';

describe('AppSpec', function() {

  it('supports enzyme', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div.App")).to.have.length(1);
  });

})