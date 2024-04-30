import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import Label, { LabelProps } from "../Label";

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

test("should render self Label", () => {
    root = createRoot(container);

    const props: LabelProps = {
        label: "Name",
        value: "Fake value"
    };

    act(() => root.render(<Label {...props} />));
    
    expect(document.body.querySelector("label")).toHaveTextContent("Name");
});