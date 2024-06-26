import { act } from "react";
import { createRoot } from "react-dom/client";
import Label, { LabelProps } from "../Label";

let container: any = null;
let root: any = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    container = null;
    act(() => root.unmount());
    root = null;
});

test("should render self Label", () => {
    root = createRoot(container);

    const props: LabelProps = {
        label: "Name",
        value: "Fake value"
    };

    act(() => root.render(<Label {...props} />));
    
    expect(document.body.querySelector("span")).toHaveTextContent("Name");
});