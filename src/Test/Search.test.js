import { shallow } from 'enzyme';
import { findByTestAttr } from './Test.utils';
import Search from '../Components/Search';


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
