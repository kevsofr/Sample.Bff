import "@testing-library/jest-dom";
import { act } from "react";
import { createRoot, Root } from "react-dom/client";
import DatatableLoading from "../DatatableLoading";

let container: HTMLElement;
let root: Root;

beforeEach(() => {
    container = document.createElement("table");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    act(() => root.unmount());
});

test("Should render self DatatableLoading", () => {
    root = createRoot(container);

    act(() => root.render(<DatatableLoading colSpan={5} />));

    expect(document.body.querySelector("svg")).not.toBeNull();
});