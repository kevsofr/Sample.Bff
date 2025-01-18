import "@testing-library/jest-dom";
import { act } from "react";
import { createRoot, Root } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Content from "../Content";
import User from "../../models/User";

let container: HTMLElement;
let root: Root;

jest.mock("../values/Values");

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    act(() => root.unmount());
    jest.clearAllMocks();
});

test("should render self Menu", () => {
    root = createRoot(container);

    const user: User = {
        name: "John Doe",
        logoutUrl: "https://localhost/logout"
    };

    act(() => root.render(<BrowserRouter><Content user={user} /></BrowserRouter>));
    
    expect(document.body.querySelector("a")).toHaveTextContent("Value");
});