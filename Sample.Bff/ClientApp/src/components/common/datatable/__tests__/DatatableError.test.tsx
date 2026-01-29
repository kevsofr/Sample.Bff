import "@testing-library/jest-dom";
import DatatableError from "../DatatableError";
import { render } from "@testing-library/react";

test("Should render self DatatableError", () => {
    render(
        <table>
            <DatatableError colSpan={5} />
        </table>
    );

    expect(document.body.querySelector("td")).toHaveTextContent("Something went wrong...");
});