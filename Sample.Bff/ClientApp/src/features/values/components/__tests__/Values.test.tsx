import "@testing-library/jest-dom";
import Values from "../Values";
import { valueFixture } from "../../../../tests/fixtures/valueFixture";
import { useDeleteValueMutation, useGetValuesQuery } from "../../../../services/valueApi";
import { mockSuccess } from "../../../../tests/rtkQueryMocks";
import { render } from "@testing-library/react";

jest.mock("../Title");
jest.mock("../../../../components/common/datatable/Datatable");
jest.mock("../Command");
jest.mock("../ValueModal");
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn()
}));
jest.mock("../../../../services/valueApi", () => ({
    useGetValuesQuery: jest.fn(),
    useDeleteValueMutation: jest.fn()
}));

test("should render self Values", () => {
    (useGetValuesQuery as jest.Mock).mockReturnValue(
        mockSuccess(valueFixture.createArrayWith(2))
    );
    (useDeleteValueMutation as jest.Mock).mockReturnValue([]);

    render(<Values />);
    
    expect(document.body.querySelector("h2[data-testid='Title']")).toHaveTextContent("Title");
});