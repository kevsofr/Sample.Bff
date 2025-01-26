import "@testing-library/jest-dom";
import { act } from "react";
import { createRoot, Root } from "react-dom/client";
import ModalBody, { ModalBodyProps } from "../ModalBody";

let container: HTMLElement;
let root: Root;

jest.mock("../../common/Input");
jest.mock("../../common/Label");

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    act(() => root.unmount());
    jest.clearAllMocks();
});

test("should render self ModalBody", () => {
    root = createRoot(container);

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

    act(() => root.render(<ModalBody {...props} />));
    
    expect(document.body.querySelector("#test-id")).toHaveTextContent("Label");
});