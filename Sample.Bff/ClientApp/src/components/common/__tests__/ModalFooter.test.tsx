import "@testing-library/jest-dom";
import ModalFooter from "../ModalFooter";
import { render } from "@testing-library/react";

test("should render self ModalFooter", () => {
    render(<ModalFooter close={() => {}} />);
    
    expect(document.body.querySelector("button")).toHaveTextContent("Close");
});