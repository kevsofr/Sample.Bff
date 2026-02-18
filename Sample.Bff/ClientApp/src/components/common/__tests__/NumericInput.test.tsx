import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ValueForm } from "../../../schemas/valueSchema";
import { UseFormRegister } from "react-hook-form";
import NumericInput, { NumericInputProps } from "../NumericInput";

const mockRegister: UseFormRegister<ValueForm> = ((_: string) => {}) as UseFormRegister<ValueForm>;

test("should render self Input", () => {
    const props: NumericInputProps<ValueForm> = {
        label: "Name",
        fieldName: "name",
        register: mockRegister,
        error: undefined
    };

    render(<NumericInput {...props} />)
    
    expect(document.body.querySelector("label")).toHaveTextContent("Name");
});