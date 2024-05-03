import { act } from "react";
import { createRoot } from "react-dom/client";
import Input, { InputProps } from "../Input";

let container: any = null;
let root: any = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    container = null;
    act(() => root.unmount());
    root = null;
});

test("should render self Input", () => {
    root = createRoot(container);

    const props: InputProps = {
        label: "Name",
        value: "Fake value",
        inputRef: null,
        required: true,
        maxLength: 3,
        errorMessage: "Mandatory",
        onChange: (_: any) => {}
    };

    act(() => root.render(<Input {...props} />));
    
    expect(document.body.querySelector("input")).toHaveValue("Fake value");
});