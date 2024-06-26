import { act } from "react";
import { createRoot } from "react-dom/client";
import Command from "../Command";

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

test("should render self Command", () => {
    root = createRoot(container);

    act(() => root.render(<Command openModal={() => {}} />));
    
    expect(document.body.querySelector("button")).not.toBeNull();
});