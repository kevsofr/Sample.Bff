import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import Input, { InputProps } from "../input";

let container: any = null;
let root: any = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    container = null;
    root = null;
});

test("should render self Input", () => {
    root = createRoot(container);

    const props: InputProps = {
        label: "Name",
        value: "Fake value",
        ref: null,
        required: true,
        maxLength: 3,
        errorMessage: "Mandatory",
        onChange: (_: any) => {}
    };

    act(() => root.render(<Input {...props} />));
    
    expect(document.body.querySelector("input")).toHaveValue("Fake value");
});