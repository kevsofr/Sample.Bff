import "@testing-library/jest-dom";
import ModalBody, { ModalBodyProps } from "../ModalBody";
import { render } from "@testing-library/react";

jest.mock("../../../../components/common/Input");
jest.mock("../../../../components/common/Label");

test("should render self ModalBody", () => {
    const props: ModalBodyProps = {
        isCreation: false,
        idInputProps: {
            label: "Id",
            name: "id",
            value: "104",
            inputRef: null,
            required: true,
            maxLength: 3,
            errorMessage: "Please provide a number between 1 and 999.",
            onChange: () => {}
        },
        labelInputProps: {
            label: "Id",
            value: "104"
        },
        valueInputProps: {
            label: "Name",
            name: "name",
            value: "Fake value 104",
            inputRef: null,
            required: true,
            maxLength: 50,
            errorMessage: "Please provide a name.",
            onChange: () => {}
        } 
    };

    render(<ModalBody {...props} />);
    
    expect(document.body.querySelector("#test-id")).toHaveTextContent("Label");
});