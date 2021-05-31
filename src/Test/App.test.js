//import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './Test.utils';
import App from '../App';


const setup = ()  => shallow(<App />);

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app')
  expect(component.length).toBe(1)
});

test('render list component', () =>{
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-list')
  expect(component.length).toBe(1)
})
