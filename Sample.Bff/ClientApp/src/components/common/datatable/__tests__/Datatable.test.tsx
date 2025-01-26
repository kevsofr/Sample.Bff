import "@testing-library/jest-dom";
import { act } from "react";
import { createRoot, Root } from "react-dom/client";
import Datatable, { DatatableProps } from "../Datatable";

let container: HTMLElement;
let root: Root;

jest.mock("../DatatableBody");
jest.mock("../DatatableLoading");
jest.mock("../DatatableError");

jest.mock("react-bs-datatable", () => ({
    ...jest.requireActual("react-bs-datatable"),
    TableHeader: () => <thead><tr><th id="test-header-id">TableHeader</th></tr></thead>
}));

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    act(() => root.unmount());
    jest.clearAllMocks();
});

test("Should render self Datatable", () => {
    root = createRoot(container);
    const props: DatatableProps<{}> = {
        data: [],
        headers: [],
        onRowClick: () => {},
        noResults: "",
        loading: false,
        error: false
    };
    
    act(() => root.render(<Datatable {...props} />));
    
    expect(document.body.querySelector("#test-header-id")).toHaveTextContent("TableHeader");
});

test("Should render self Loading", () => {
    root = createRoot(container);
    const props: DatatableProps<{}> = {
        data: [],
        headers: [],
        onRowClick: () => {},
        noResults: "",
        loading: true,
        error: false
    };
    
    act(() => root.render(<Datatable {...props} />));
    
    expect(document.body.querySelector("#test-loading-id")).toHaveTextContent("DatatableLoading");
});

test("Should render self Error", () => {
    root = createRoot(container);
    const props: DatatableProps<{}> = {
        data: [],
        headers: [],
        onRowClick: () => {},
        noResults: "",
        loading: false,
        error: true
    };
    
    act(() => root.render(<Datatable {...props} />));
    
    expect(document.body.querySelector("#test-error-id")).toHaveTextContent("DatatableError");
});