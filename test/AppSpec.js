import Page from 'react-page-object'
import React from 'react'
import App from 'App'
import { shallow } from 'enzyme';

describe('AppSpec', function() {
  let page

  beforeEach(function() {
    page = new Page(<App />)
  })

  afterEach(function() {
    page.destroy()
  })

  it('should pass', function() {
    expect(page.content()).to.match(/Welcome to React/)
  })

  it('supports enzyme', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div.App")).to.have.length(1);
  });
})