import { render } from "@testing-library/react-native";
import ModalScreen from "../modal";


describe("Modal",()=>{
    it("should render the title of modal",()=>{
        const screen = render(<ModalScreen />);
        const modalText = screen.getByText(/This is a modal/i);
        expect(modalText).toBeDefined()
    })

    it("should render home screen link",()=>{
        const screen = render(<ModalScreen />);
        const modalText = screen.getByText(/Go to home screen/i);
        expect(modalText).toBeDefined()
    })
})
