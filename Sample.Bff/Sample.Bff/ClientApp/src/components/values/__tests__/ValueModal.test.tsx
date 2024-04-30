import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import ValueModal, { ValueModalProps } from "../ValueModal";

let container: any = null;
let root: any = null;

jest.mock("../../Common/Input");

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    container = null;
    root = null;
    jest.clearAllMocks();
});

test("should render self ValueModal", () => {
    root = createRoot(container);

    const props: ValueModalProps = {
        displayModal: true,
        value: null,
        submit: () => {},
        closeModal: () => {}
    };

    act(() => root.render(<ValueModal {...props} />));
    
    expect(document.body.querySelector("div.modal-title")).toHaveTextContent("Add value");
});

test("should not submit form when id is empty", () => {
    root = createRoot(container);

    const props: ValueModalProps = {
        displayModal: true,
        value: null,
        submit: () => {},
        closeModal: () => {}
    };

    act(() => root.render(<ValueModal {...props} />));
    
    expect(document.body.querySelector("div.modal-title")).toHaveTextContent("Add value");
});