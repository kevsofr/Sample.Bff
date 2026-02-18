import "@testing-library/jest-dom";
import Values from "../Values";
import { valueFixture } from "../../../../tests/fixtures/valueFixture";
import { render } from "@testing-library/react";
import { mockSuccess } from "../../../../tests/rtkQueryMocks";

jest.mock("../Title");
jest.mock("../../../../components/common/datatable/Datatable");
jest.mock("../Command");
jest.mock("../ValueModal");
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn()
}));
jest.mock("../../../../services/valueApi", () => ({
    useGetValuesQuery: () => mockSuccess(valueFixture.createArrayWith(2)),
    useDeleteValueMutation: () => []
}));

test("should render self Values", () => {
    render(<Values />);
    
    expect(document.body.querySelector("h2[data-testid='title']")).toHaveTextContent("Title");
});