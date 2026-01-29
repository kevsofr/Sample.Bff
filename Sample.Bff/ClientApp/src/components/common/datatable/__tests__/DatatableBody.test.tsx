import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import DatatableBody, { DatatableBodyProps } from "../DatatableBody";

jest.mock("react-bs-datatable", () => ({
    ...jest.requireActual("react-bs-datatable"),
    TableBody: () => <div>TableBody</div>
}));

test("Should render self DatatableBody", () => {
    const props: DatatableBodyProps<{}> = {
        onRowClick: () => {},
        noResults: ""
    };

    render(<DatatableBody {...props} />);

    expect(document.body.querySelector("div")).toHaveTextContent("TableBody");
});