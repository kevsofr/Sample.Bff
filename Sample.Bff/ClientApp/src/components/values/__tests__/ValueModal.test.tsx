import "@testing-library/jest-dom";
import { act } from "react";
import { fireEvent } from '@testing-library/react';
import { createRoot, Root } from "react-dom/client";
import ValueModal, { ValueModalProps } from "../ValueModal";

let container: HTMLElement;
let root: Root;

jest.mock("../../common/ModalHeader");

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    act(() => root.unmount());
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
    
    expect(document.body.querySelector("button[type=submit]")).toHaveTextContent("OK");
});

test("should not submit form when id is empty", () => {
    root = createRoot(container);

    const props: ValueModalProps = {
        displayModal: true,
        value: null,
        submit: jest.fn(),
        closeModal: () => {}
    };
    
    act(() => root.render(<ValueModal {...props} />));
    
    const nameInput = document.querySelector("input#Value");
    const submitBtn = document.querySelector("button[type=submit]");

    if (submitBtn !== null && nameInput !== null) {
        fireEvent.change(nameInput, { target: { value: "Fake value 5" } });
        fireEvent.click(submitBtn);
    }
    
    expect(props.submit).not.toHaveBeenCalled();
});

test("should not submit form when id is not a number", () => {
    root = createRoot(container);

    const props: ValueModalProps = {
        displayModal: true,
        value: null,
        submit: jest.fn(),
        closeModal: () => {}
    };
    
    act(() => root.render(<ValueModal {...props} />));
    
    const idInput = document.querySelector("input#Id");
    const nameInput = document.querySelector("input#Value");
    const submitBtn = document.querySelector("button[type=submit]");

    if (submitBtn !== null && idInput !== null && nameInput !== null) {
        fireEvent.change(idInput, { target: { value: "Id" } });
        fireEvent.change(nameInput, { target: { value: "Fake value 5" } });
        fireEvent.click(submitBtn);
    }

    expect(props.submit).not.toHaveBeenCalled();
});

test("should not submit form when id is lower than 1", () => {
    root = createRoot(container);

    const props: ValueModalProps = {
        displayModal: true,
        value: null,
        submit: jest.fn(),
        closeModal: () => {}
    };
    
    act(() => root.render(<ValueModal {...props} />));
    
    const idInput = document.querySelector("input#Id");
    const nameInput = document.querySelector("input#Value");
    const submitBtn = document.querySelector("button[type=submit]");

    if (submitBtn !== null && idInput !== null && nameInput !== null) {
        fireEvent.change(idInput, { target: { value: "0" } });
        fireEvent.change(nameInput, { target: { value: "Fake value 5" } });
        fireEvent.click(submitBtn);
    }

    expect(props.submit).not.toHaveBeenCalled();
});

test("should not submit form when id is greater than 999", () => {
    root = createRoot(container);

    const props: ValueModalProps = {
        displayModal: true,
        value: null,
        submit: jest.fn(),
        closeModal: () => {}
    };
    
    act(() => root.render(<ValueModal {...props} />));
    
    const idInput = document.querySelector("input#Id");
    const nameInput = document.querySelector("input#Value");
    const submitBtn = document.querySelector("button[type=submit]");

    if (submitBtn !== null && idInput !== null && nameInput !== null) {
        fireEvent.change(idInput, { target: { value: "1000" } });
        fireEvent.change(nameInput, { target: { value: "Fake value 5" } });
        fireEvent.click(submitBtn);
    }

    expect(props.submit).not.toHaveBeenCalled();
});

test("should not submit form when name is empty", () => {
    root = createRoot(container);

    const props: ValueModalProps = {
        displayModal: true,
        value: null,
        submit: jest.fn(),
        closeModal: () => {}
    };
    
    act(() => root.render(<ValueModal {...props} />));
    
    const idInput = document.querySelector("input#Id");
    const nameInput = document.querySelector("input#Value");
    const submitBtn = document.querySelector("button[type=submit]");

    if (submitBtn !== null && idInput !== null && nameInput !== null) {
        fireEvent.change(idInput, { target: { value: "5" } });
        fireEvent.change(nameInput, { target: { value: "" } });
        fireEvent.click(submitBtn);
    }

    expect(props.submit).not.toHaveBeenCalled();
});

test("should submit form when form is valid for creation", () => {
    root = createRoot(container);

    const props: ValueModalProps = {
        displayModal: true,
        value: null,
        submit: jest.fn(),
        closeModal: () => {}
    };
    
    act(() => root.render(<ValueModal {...props} />));
    
    const idInput = document.querySelector("input#Id");
    const nameInput = document.querySelector("input#Value");
    const submitBtn = document.querySelector("button[type=submit]");

    if (submitBtn !== null && idInput !== null && nameInput !== null) {
        fireEvent.change(idInput, { target: { value: "5" } });
        fireEvent.change(nameInput, { target: { value: "Fake value 5" } });
        fireEvent.click(submitBtn);
    }

    expect(props.submit).toHaveBeenCalled();
});

test("should submit form when form is valid for update", () => {
    root = createRoot(container);

    const props: ValueModalProps = {
        displayModal: true,
        value: {
            id: 101,
            name: "Fake value 101"
        },
        submit: jest.fn(),
        closeModal: () => {}
    };
    
    act(() => root.render(<ValueModal {...props} />));
    
    const nameInput = document.querySelector("input#Value");
    const submitBtn = document.querySelector("button[type=submit]");

    if (submitBtn !== null && nameInput !== null) {
        fireEvent.change(nameInput, {target: {value: "Fake value 5"}});
        fireEvent.click(submitBtn);
    }

    expect(props.submit).toHaveBeenCalled();
});