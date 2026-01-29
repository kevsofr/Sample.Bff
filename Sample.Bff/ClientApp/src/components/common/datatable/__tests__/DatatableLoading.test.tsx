import "@testing-library/jest-dom";
import DatatableLoading from "../DatatableLoading";
import { render } from "@testing-library/react";

test("Should render self DatatableLoading", () => {
    render(
        <table>
            <DatatableLoading colSpan={5} />
        </table>
    );

    expect(document.body.querySelector("svg")).not.toBeNull();
});