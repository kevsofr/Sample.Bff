import "@testing-library/jest-dom";
import { act } from "react";
import { createRoot, Root } from "react-dom/client";
import ModalHeader, { ModalHeaderProps } from "../ModalHeader";

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

test("should render self ModalHeader", () => {
    root = createRoot(container);

    const props: ModalHeaderProps = {
        isCreation: true,
        creationTitle: "Add value",
        updateTitle: "Update value"
    };

    act(() => root.render(<ModalHeader {...props} />));
    
    expect(document.body.querySelector("div.modal-title")).toHaveTextContent("Add value");
});