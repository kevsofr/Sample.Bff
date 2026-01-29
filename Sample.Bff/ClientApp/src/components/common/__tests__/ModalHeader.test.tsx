import "@testing-library/jest-dom";
import ModalHeader, { ModalHeaderProps } from "../ModalHeader";
import { render } from "@testing-library/react";

test("should render self ModalHeader", () => {
    const props: ModalHeaderProps = {
        isCreation: true,
        creationTitle: "Add value",
        updateTitle: "Update value"
    };

    render(<ModalHeader {...props} />)
    
    expect(document.body.querySelector("div.modal-title")).toHaveTextContent("Add value");
});