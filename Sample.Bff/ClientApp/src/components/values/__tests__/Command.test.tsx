import "@testing-library/jest-dom";
import { act } from "react";
import { createRoot, Root } from "react-dom/client";
import Command from "../Command";

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

test("should render self Command", () => {
    root = createRoot(container);

    act(() => root.render(<Command openModal={() => {}} />));
    
    expect(document.body.querySelector("button")).not.toBeNull();
});