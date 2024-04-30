import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Content from "../Content";
import User from "../../models/User";

let container: any = null;
let root: any = null;

jest.mock("../values/Values");

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    container = null;
    root = null;
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