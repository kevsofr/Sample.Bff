import "@testing-library/jest-dom";
import Command from "../Command";
import { render } from "@testing-library/react";

test("should render self Command", () => {
    render(<Command openModal={() => {}} />);
    
    expect(document.body.querySelector("button")).not.toBeNull();
});