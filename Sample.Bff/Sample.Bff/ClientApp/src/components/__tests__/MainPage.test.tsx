import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import MainPage from "../MainPage";

let container: any = null;
let root: any = null;
let store: any = null;

jest.mock("../Content");

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    store = configureMockStore()({
        user: {
            user: {},
            isAuthenticated: true
        }
    });
});

afterEach(() => {
    container.remove();
    container = null;
    root = null;
    store = null;
    jest.clearAllMocks();
});

test("should render self MainPage", () => {
    root = createRoot(container);

    act(() => root.render(<Provider store={store}><MainPage /></Provider>));
    
    expect(document.body.querySelector("div")?.textContent).toBe("Content");
});