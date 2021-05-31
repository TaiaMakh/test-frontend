import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import List from "../Components/List";
import { findByTestAttr } from "./Test.utils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<List />);

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-list");
  expect(component.length).toBe(1);
});

