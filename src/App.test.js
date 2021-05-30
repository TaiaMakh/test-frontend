//import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App';
import { findByTestAttr } from './Test/Test.utils';

Enzyme.configure({ adapter: new EnzymeAdapter() })

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
