import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Search from './Search';
import { findByTestAttr } from '../Test/Test.utils';


Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props={}) => {
    return shallow(<Search {...props}/>)
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-search');
    expect(component.length).toBe(1);
});
test('renders no input when `search` or `setSearch` prop is false', () => {
    const wrapper = setup({ search: false, setSearch: false })
    const component = findByTestAttr(wrapper, 'component-search');
    expect (component.text()).toBe(''); 
})
// test('renders input when `search` or `setSearch` props are true', () => {
//     const wrapper = setup({ search: true, setSearch: true })
//     const message = findByTestAttr(wrapper, 'coponent-search');
//     expect(message.text().length).not.toBe(0)
// })