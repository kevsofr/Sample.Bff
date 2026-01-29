import "@testing-library/jest-dom";
import Label, { LabelProps } from "../Label";
import { render } from "@testing-library/react";

test("should render self Label", () => {
    const props: LabelProps = {
        label: "Name",
        value: "Fake value"
    };

    render(<Label {...props} />)
    
    expect(document.body.querySelector("span")).toHaveTextContent("Name");
});