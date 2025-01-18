import "@testing-library/jest-dom";
import { act } from "react";
import { createRoot, Root } from "react-dom/client";
import DatatableError from "../DatatableError";

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

    act(() => root.render(<DatatableError colSpan={5} />));

    expect(document.body.querySelector("td")).toHaveTextContent("Something went wrong...");
});