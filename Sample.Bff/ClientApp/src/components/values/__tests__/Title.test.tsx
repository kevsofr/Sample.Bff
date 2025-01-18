import "@testing-library/jest-dom";
import { act } from "react";
import { createRoot, Root } from "react-dom/client";
import Title from "../Title";

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

test("should render self Title", () => {
    root = createRoot(container);

    act(() => root.render(<Title />));
    
    expect(document.body.querySelector("h2")).toHaveTextContent("List of fake values");
});