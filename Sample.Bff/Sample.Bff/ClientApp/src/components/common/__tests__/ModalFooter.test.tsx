import { act } from "react";
import { createRoot } from "react-dom/client";
import ModalFooter from "../ModalFooter";

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

test("should render self ModalFooter", () => {
    root = createRoot(container);

    act(() => root.render(<ModalFooter close={() => {}} />));
    
    expect(document.body.querySelector("button")).toHaveTextContent("Close");
});