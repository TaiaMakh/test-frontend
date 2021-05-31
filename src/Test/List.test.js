import { shallow } from "enzyme";
import { findByTestAttr } from "./Test.utils";
import List from "../Components/List";

const setup = () => shallow(<List />);

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-list");
  expect(component.length).toBe(1);
});

