import "@testing-library/jest-dom";
import * as ReactRedux from "react-redux";
import { fireEvent, render } from '@testing-library/react';
import ValueModal from "../ValueModal";
import { useCreateValueMutation, useGetValueQuery, useUpdateValueMutation } from "../../../../services/valueApi";
import { mockSuccess } from "../../../../tests/rtkQueryMocks";
import * as valueApi from "../../../../services/valueApi";
import Value from "../../../../models/Value";

type TriggerCreate = ReturnType<typeof valueApi.useCreateValueMutation>[0];
type TriggerUpdate = ReturnType<typeof valueApi.useUpdateValueMutation>[0];

let createValueMock: jest.MockedFunction<TriggerCreate>;
let updateValueMock: jest.MockedFunction<TriggerUpdate>;
let useSelectorMock: any;

jest.mock("../../../../components/common/ModalHeader");
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => jest.fn(),
    useSelector: jest.fn()
}));
jest.mock("../../../../services/valueApi", () => ({
    useGetValueQuery: jest.fn(),
    useCreateValueMutation: jest.fn(),
    useUpdateValueMutation: jest.fn()
}));    

test("should render self ValueModal", () => {
    useSelectorMock = jest.spyOn(ReactRedux, "useSelector");
    createValueMock = jest.fn() as jest.MockedFunction<TriggerCreate>;
    (useCreateValueMutation as jest.Mock).mockReturnValue([createValueMock]);
    updateValueMock = jest.fn() as jest.MockedFunction<TriggerUpdate>;
    (useUpdateValueMutation as jest.Mock).mockReturnValue([updateValueMock]);
    useSelectorMock.mockReturnValue({ displayModal: true, valueId: 0 });

    (useGetValueQuery as jest.Mock).mockReturnValue(
        mockSuccess(undefined)
    );

    render(<ValueModal />);
    
    expect(document.body.querySelector("button[type=submit]")).toHaveTextContent("OK");
});