import "@testing-library/jest-dom";
import { act } from "react";
import { createRoot, Root } from "react-dom/client";
import Input, { InputProps } from "../Input";

let container: HTMLElement;
let root: Root;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    act(() => root.unmount());
});

test("should render self Input", () => {
    root = createRoot(container);

    const props: InputProps = {
        label: "Name",
        name: "Name",
        value: "Fake value",
        inputRef: null,
        required: true,
        maxLength: 3,
        errorMessage: "Mandatory",
        onChange: () => {}
    };

    act(() => root.render(<Input {...props} />));
    
    expect(document.body.querySelector("input")).toHaveValue("Fake value");
});