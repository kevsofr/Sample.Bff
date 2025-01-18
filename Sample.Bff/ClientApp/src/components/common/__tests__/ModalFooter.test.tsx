import "@testing-library/jest-dom";
import { act } from "react";
import { createRoot, Root } from "react-dom/client";
import ModalFooter from "../ModalFooter";

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

test("should render self ModalFooter", () => {
    root = createRoot(container);

    act(() => root.render(<ModalFooter close={() => {}} />));
    
    expect(document.body.querySelector("button")).toHaveTextContent("Close");
});