import { act } from "react";
import { createRoot } from "react-dom/client";
import DatatableLoading from "../DatatableLoading";

let container: any = null;
let root: any = null;

beforeEach(() => {
    container = document.createElement("table");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    container = null;
    act(() => root.unmount());
    root = null;
});

test("Should render self DatatableLoading", () => {
    root = createRoot(container);

    act(() => root.render(<DatatableLoading colSpan={5} />));

    expect(document.body.querySelector("svg")).not.toBeNull();
});