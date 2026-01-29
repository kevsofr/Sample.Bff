import "@testing-library/jest-dom";
import Input, { InputProps } from "../Input";
import { render } from "@testing-library/react";

test("should render self Input", () => {
    const props: InputProps = {
        label: "Name",
        name: "Name",
        value: "Fake value",
        inputRef: null,
        required: true,
        maxLength: 3,
        errorMessage: "Mandatory",
        onChange: () => {}
    };

    render(<Input {...props} />)
    
    expect(document.body.querySelector("input")).toHaveValue("Fake value");
});