import "@testing-library/jest-dom";
import Label, { LabelProps } from "../Label";
import { render } from "@testing-library/react";
import { ValueForm } from "../../../schemas/valueSchema";
import { UseFormRegister } from "react-hook-form";

const mockRegister: UseFormRegister<ValueForm> = ((_: string) => {}) as UseFormRegister<ValueForm>;

test("should render self Label", () => {
    const props: LabelProps<ValueForm> = {
        label: "Name",
        value: "Fake value",
        fieldName: "name",
        register: mockRegister
    };

    render(<Label {...props} />)
    
    expect(document.body.querySelector("span")).toHaveTextContent("Name");
});