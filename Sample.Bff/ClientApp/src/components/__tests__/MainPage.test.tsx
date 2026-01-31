import "@testing-library/jest-dom";
import MainPage from "../MainPage";
import { render } from "@testing-library/react";
import { useGetUserQuery } from "../../services/userApi";
import { mockSuccess } from "../../tests/rtkQueryMocks";
import { userFixture } from "../../tests/fixtures/userFixture";

jest.mock("../Content");
jest.mock("../../services/userApi", () => ({
    useGetUserQuery: jest.fn()
}));

test("should render self MainPage", () => {
    (useGetUserQuery as jest.Mock).mockReturnValue(
        mockSuccess(userFixture.create())
    );

    render(<MainPage />);
    
    expect(document.body.querySelector("div[data-testid='Content']")).toHaveTextContent("Content");
});