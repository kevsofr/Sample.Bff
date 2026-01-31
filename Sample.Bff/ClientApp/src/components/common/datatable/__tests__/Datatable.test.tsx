import "@testing-library/jest-dom";
import Datatable, { DatatableProps } from "../Datatable";
import { render } from "@testing-library/react";

jest.mock("../DatatableBody");
jest.mock("../DatatableLoading");
jest.mock("../DatatableError");
jest.mock("react-bs-datatable", () => ({
    ...jest.requireActual("react-bs-datatable"),
    TableHeader: () => <thead><tr><th id="test-header-id">TableHeader</th></tr></thead>
}));

test("Should render self Datatable", () => {
    const props: DatatableProps<{}> = {
        data: [],
        headers: [],
        onRowClick: () => {},
        noResults: "",
        isLoading: false,
        isError: false
    };
    
    render(<Datatable {...props} />);
    
    expect(document.body.querySelector("#test-header-id")).toHaveTextContent("TableHeader");
});

test("Should render self Loading", () => {
    const props: DatatableProps<{}> = {
        data: [],
        headers: [],
        onRowClick: () => {},
        noResults: "",
        isLoading: true,
        isError: false
    };
    
    render(<Datatable {...props} />);
    
    expect(document.body.querySelector("#test-loading-id")).toHaveTextContent("DatatableLoading");
});

test("Should render self Error", () => {
    const props: DatatableProps<{}> = {
        data: [],
        headers: [],
        onRowClick: () => {},
        noResults: "",
        isLoading: false,
        isError: true
    };
    
    render(<Datatable {...props} />);
    
    expect(document.body.querySelector("#test-error-id")).toHaveTextContent("DatatableError");
});