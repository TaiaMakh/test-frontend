import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import List from './List'
import { findByTestAttr } from '../Test/Test.utils';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = ()  => shallow(<List />);

test('renders without error', () => {

});
