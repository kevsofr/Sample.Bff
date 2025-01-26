import "@testing-library/jest-dom";
import { act } from "react";
import { createRoot, Root } from "react-dom/client";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { Store } from "@reduxjs/toolkit";
import MainPage from "../MainPage";

let container: HTMLElement;
let root: Root;
let store: Store;

jest.mock("../Content");

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    store = configureMockStore()({
        management: {
            user: {},
            isAuthenticated: true
        }
    });
});

afterEach(() => {
    container.remove();
    act(() => root.unmount());
    jest.clearAllMocks();
});

test("should render self MainPage", () => {
    root = createRoot(container);

    act(() => root.render(<Provider store={store}><MainPage /></Provider>));
    
    expect(document.body.querySelector("#test-id")).toHaveTextContent("Content");
});