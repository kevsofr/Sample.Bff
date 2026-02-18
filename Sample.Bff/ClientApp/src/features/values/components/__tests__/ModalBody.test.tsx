import "@testing-library/jest-dom";
import ModalBody, { ModalBodyProps } from "../ModalBody";
import { render } from "@testing-library/react";
import { valueFixture } from "../../../../tests/fixtures/valueFixture";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ValueForm } from "../../../../schemas/valueSchema";

jest.mock("../../../../components/common/Input");
jest.mock("../../../../components/common/NumericInput");
jest.mock("../../../../components/common/Label");

const mockRegister: UseFormRegister<ValueForm> = {} as UseFormRegister<ValueForm>;
const mockErrors: FieldErrors<ValueForm> = {};

test("should render self ModalBody in create", () => {
    const props: ModalBodyProps = {
        isCreation: true,
        value: valueFixture.create(),
        register: mockRegister,
        errors: mockErrors
    };

    render(<ModalBody {...props} />);
    
    expect(document.body.querySelector("span[data-testid='numeric-input']")).toHaveTextContent("NumericInput");
});

test("should render self ModalBody in update", () => {
    const props: ModalBodyProps = {
        isCreation: false,
        value: valueFixture.create(),
        register: mockRegister,
        errors: mockErrors
    };

    render(<ModalBody {...props} />);
    
    expect(document.body.querySelector("span[data-testid='label']")).toHaveTextContent("Label");
});