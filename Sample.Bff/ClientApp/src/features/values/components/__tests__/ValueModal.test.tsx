import "@testing-library/jest-dom";
import * as ReactRedux from "react-redux";
import { fireEvent, render } from '@testing-library/react';
import ValueModal from "../ValueModal";
import { useCreateValueMutation, useGetValueQuery, useUpdateValueMutation } from "../../../../services/valueApi";
import { mockSuccess } from "../../../../tests/rtkQueryMocks";
import * as valueApi from "../../../../services/valueApi";
import Value from "../../../../models/Value";

jest.mock("../../../../components/common/ModalHeader");
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
    useSelector: jest.fn()
}));
jest.mock("../../../../services/valueApi", () => ({
    useGetValueQuery: jest.fn(),
    useCreateValueMutation: jest.fn(),
    useUpdateValueMutation: jest.fn()
}));

type TriggerCreate = ReturnType<typeof valueApi.useCreateValueMutation>[0];
type TriggerUpdate = ReturnType<typeof valueApi.useUpdateValueMutation>[0];

let createValueMock: jest.MockedFunction<TriggerCreate>;
let updateValueMock: jest.MockedFunction<TriggerUpdate>;
let useSelectorMock: any;

beforeEach(() => {
    const dispatchMock = jest.fn();
    jest.spyOn(ReactRedux, "useDispatch").mockReturnValue(dispatchMock as any);
    useSelectorMock = jest.spyOn(ReactRedux, "useSelector");
    createValueMock = jest.fn() as jest.MockedFunction<TriggerCreate>;
    (useCreateValueMutation as jest.Mock).mockReturnValue([createValueMock]);
    updateValueMock = jest.fn() as jest.MockedFunction<TriggerUpdate>;
    (useUpdateValueMutation as jest.Mock).mockReturnValue([updateValueMock]);
});

test("should render self ValueModal", () => {
    useSelectorMock.mockReturnValue({ displayModal: true, valueId: 0 });

    (useGetValueQuery as jest.Mock).mockReturnValue(
        mockSuccess(undefined)
    );

    render(<ValueModal />);
    
    expect(document.body.querySelector("button[type=submit]")).toHaveTextContent("OK");
});

test("should not submit form when id is empty", () => {
    useSelectorMock.mockReturnValue({ displayModal: true, valueId: 0 });

    (useGetValueQuery as jest.Mock).mockReturnValue(
        mockSuccess(undefined)
    );

    render(<ValueModal />);
    
    const nameInput = document.querySelector("input#Value");
    const submitBtn = document.querySelector("button[type=submit]");

    if (submitBtn !== null && nameInput !== null) {
        fireEvent.change(nameInput, { target: { value: "Fake value 5" } });
        fireEvent.click(submitBtn);
    }
    
    expect(createValueMock).not.toHaveBeenCalled();
    expect(updateValueMock).not.toHaveBeenCalled();
});

test("should not submit form when id is not a number", () => {
    useSelectorMock.mockReturnValue({ displayModal: true, valueId: 0 });

    (useGetValueQuery as jest.Mock).mockReturnValue(
        mockSuccess(undefined)
    );

    render(<ValueModal />);
    
    const idInput = document.querySelector("input#Id");
    const nameInput = document.querySelector("input#Value");
    const submitBtn = document.querySelector("button[type=submit]");

    if (submitBtn !== null && idInput !== null && nameInput !== null) {
        fireEvent.change(idInput, { target: { value: "Id" } });
        fireEvent.change(nameInput, { target: { value: "Fake value 5" } });
        fireEvent.click(submitBtn);
    }

    expect(createValueMock).not.toHaveBeenCalled();
    expect(updateValueMock).not.toHaveBeenCalled();
});

test("should not submit form when id is lower than 1", () => {
    useSelectorMock.mockReturnValue({ displayModal: true, valueId: 0 });

    (useGetValueQuery as jest.Mock).mockReturnValue(
        mockSuccess(undefined)
    );

    render(<ValueModal />);
    
    const idInput = document.querySelector("input#Id");
    const nameInput = document.querySelector("input#Value");
    const submitBtn = document.querySelector("button[type=submit]");

    if (submitBtn !== null && idInput !== null && nameInput !== null) {
        fireEvent.change(idInput, { target: { value: "0" } });
        fireEvent.change(nameInput, { target: { value: "Fake value 5" } });
        fireEvent.click(submitBtn);
    }

    expect(createValueMock).not.toHaveBeenCalled();
    expect(updateValueMock).not.toHaveBeenCalled();
});

test("should not submit form when id is greater than 999", () => {
    useSelectorMock.mockReturnValue({ displayModal: true, valueId: 0 });

    render(<ValueModal />);
    
    const idInput = document.querySelector("input#Id");
    const nameInput = document.querySelector("input#Value");
    const submitBtn = document.querySelector("button[type=submit]");

    if (submitBtn !== null && idInput !== null && nameInput !== null) {
        fireEvent.change(idInput, { target: { value: "1000" } });
        fireEvent.change(nameInput, { target: { value: "Fake value 5" } });
        fireEvent.click(submitBtn);
    }

    expect(createValueMock).not.toHaveBeenCalled();
    expect(updateValueMock).not.toHaveBeenCalled();
});

test("should not submit form when name is empty", () => {
    useSelectorMock.mockReturnValue({ displayModal: true, valueId: 0 });

    render(<ValueModal />);
    
    const idInput = document.querySelector("input#Id");
    const nameInput = document.querySelector("input#Value");
    const submitBtn = document.querySelector("button[type=submit]");

    if (submitBtn !== null && idInput !== null && nameInput !== null) {
        fireEvent.change(idInput, { target: { value: "5" } });
        fireEvent.change(nameInput, { target: { value: "" } });
        fireEvent.click(submitBtn);
    }

    expect(createValueMock).not.toHaveBeenCalled();
    expect(updateValueMock).not.toHaveBeenCalled();
});

test("should submit form when form is valid for creation", () => {
    useSelectorMock.mockReturnValue({ displayModal: true, valueId: 0 });

    render(<ValueModal />);
    
    const idInput = document.querySelector("input#Id");
    const nameInput = document.querySelector("input#Value");
    const submitBtn = document.querySelector("button[type=submit]");

    if (submitBtn !== null && idInput !== null && nameInput !== null) {
        fireEvent.change(idInput, { target: { value: "5" } });
        fireEvent.change(nameInput, { target: { value: "Fake value 5" } });
        fireEvent.click(submitBtn);
    }

    expect(createValueMock).toHaveBeenCalled();
    expect(updateValueMock).not.toHaveBeenCalled();
});

test("should submit form when form is valid for update", () => {
    useSelectorMock.mockReturnValue({ displayModal: true, valueId: 101 });

    const value: Value = {
        id: 101,
        name: "Fake value 101"
    };
    (useGetValueQuery as jest.Mock).mockReturnValue(
        mockSuccess(value)
    );

    render(<ValueModal />);
    
    const nameInput = document.querySelector("input#Value");
    const submitBtn = document.querySelector("button[type=submit]");

    if (submitBtn !== null && nameInput !== null) {
        fireEvent.change(nameInput, {target: {value: "Fake value 5"}});
        fireEvent.click(submitBtn);
    }

    expect(createValueMock).not.toHaveBeenCalled();
    expect(updateValueMock).toHaveBeenCalled();
});