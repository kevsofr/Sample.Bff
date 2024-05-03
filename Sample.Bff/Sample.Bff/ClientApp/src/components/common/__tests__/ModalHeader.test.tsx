import { act } from "react";
import { createRoot } from "react-dom/client";
import ModalHeader, { ModalHeaderProps } from "../ModalHeader";

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