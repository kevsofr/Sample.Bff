import "@testing-library/jest-dom";
import { act } from "react";
import { createRoot, Root } from "react-dom/client";
import Label, { LabelProps } from "../Label";

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

test("should render self Label", () => {
    root = createRoot(container);

    const props: LabelProps = {
        label: "Name",
        value: "Fake value"
    };

    act(() => root.render(<Label {...props} />));
    
    expect(document.body.querySelector("span")).toHaveTextContent("Name");
});