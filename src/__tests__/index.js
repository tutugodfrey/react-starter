import React from 'react';
// import Welcome from '../index';
import { shallow } from 'enzyme';
import App from '../App.jsx';

describe('<Welcome />', () => {
  test('hello ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.container').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').text()).toBe('Heading');
  });

  test('hello ', () => {
    const wrapper = shallow(<App />);
    const html = wrapper.find('h1').html();
    expect(html).toBe('<h1>Heading</h1>');
  });

  test('check the type of element is App', () => {
    const wrapper = shallow(<App />);
    const type = wrapper.find('h1').name();
    expect(type).toBe('h1');
  });

  test('check the type of element is App', () => {
    const wrapper = shallow(<App />);
    const type = wrapper.find('h1').type();
    expect(type).toBe('h1');
  });

  test('check the type of element is App', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance).toBe(null);
  });

  test('check the type of element is App', () => {
    const wrapper = shallow(<App />);
    const hostNodes = wrapper.find('h1').hostNodes();
    expect(hostNodes.length).toBe(1);
  });

  test('check the type of element is App', () => {
    const wrapper = shallow(<App />);
    const containsNode = wrapper.contains(<h1>Heading</h1>);
    expect(containsNode).toBe(true);
  });
});
