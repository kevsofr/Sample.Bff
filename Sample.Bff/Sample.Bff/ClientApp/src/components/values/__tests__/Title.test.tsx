import { act } from "react";
import { createRoot } from "react-dom/client";
import Title from "../Title";

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

test("should render self Title", () => {
    root = createRoot(container);

    act(() => root.render(<Title />));
    
    expect(document.body.querySelector("h2")).toHaveTextContent("List of fake values");
});