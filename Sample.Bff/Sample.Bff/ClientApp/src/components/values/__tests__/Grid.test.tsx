import { act } from "react";
import { createRoot } from "react-dom/client";
import Grid, { GridProps } from "../Grid";
import { valueFixture } from "../../../fixtures/valueFixture";
import Value from "../../../models/Value";

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

test("should render self Grid", () => {
    root = createRoot(container);

    const values: Value[] = valueFixture.createArrayWith(2);

    const grid: GridProps = {
        values: values,
        getValue: () => {},
        deleteValue: () => {}
    };

    act(() => root.render(<Grid {...grid} />));
    
    expect(document.body.querySelector("td")).toHaveTextContent(values[0].id.toString());
});