import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Title from "../Title";

test("should render self Title", () => {
    render(<Title />);
    
    expect(document.body.querySelector("h2")).toHaveTextContent("List of fake values");
});