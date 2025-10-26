import TabTwoScreen from "@/app/(tabs)/explore";
import { render } from "@testing-library/react-native";

describe("TabTwoScreen", () => {
  it("should render the title of explore", () => {
    const screen = render(<TabTwoScreen />);
    const titleText = screen.getByText("Explore");
    expect(titleText).toBeDefined();
  });

  it("should render .layout information", () => {
    const screen = render(<TabTwoScreen />);
    const layoutText = screen.getByText('This app includes example code to help you get started.');
    expect(layoutText).toBeDefined();
  });
});
