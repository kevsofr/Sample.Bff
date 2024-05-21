import { act } from "react";
import { createRoot } from "react-dom/client";
import Datatable, { DatatableProps } from "../Datatable";

let container: any = null;
let root: any = null;

jest.mock("../DatatableBody");
jest.mock("../DatatableLoading");
jest.mock("../DatatableError");

jest.mock("react-bs-datatable", () => ({
    ...jest.requireActual("react-bs-datatable"),
    TableHeader: () => <thead><tr><th>TableHeader</th></tr></thead>
}));

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    container = null;
    act(() => root.unmount());
    root = null;
    jest.clearAllMocks();
});

test("Should render self Datatable", () => {
    root = createRoot(container);
    const props: DatatableProps<number> = {
        data: [],
        headers: [],
        onRowClick: () => {},
        noResults: "",
        loading: false,
        error: false
    };
    
    act(() => root.render(<Datatable {...props} />));
    
    expect(document.body.querySelector("tr")).toHaveTextContent("TableHeader");
});

test("Should render self Loading", () => {
    root = createRoot(container);
    const props: DatatableProps<number> = {
        data: [],
        headers: [],
        onRowClick: () => {},
        noResults: "",
        loading: true,
        error: false
    };
    
    act(() => root.render(<Datatable {...props} />));
    
    expect(document.body.querySelector("tbody")).toHaveTextContent("DatatableLoading");
});

test("Should render self Error", () => {
    root = createRoot(container);
    const props: DatatableProps<number> = {
        data: [],
        headers: [],
        onRowClick: () => {},
        noResults: "",
        loading: false,
        error: true
    };
    
    act(() => root.render(<Datatable {...props} />));
    
    expect(document.body.querySelector("tbody")).toHaveTextContent("DatatableError");
});