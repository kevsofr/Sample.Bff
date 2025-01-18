import "@testing-library/jest-dom";
import { act } from "react";
import { createRoot, Root } from "react-dom/client";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { Store } from "@reduxjs/toolkit";
import Values from "../Values";
import { valueFixture } from "../../../fixtures/valueFixture";

let container: HTMLElement;
let root: Root;
let store: Store;

jest.mock("../Title");
jest.mock("../../common/datatable/Datatable");
jest.mock("../Command");
jest.mock("../ValueModal");

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    store = configureMockStore()({
        value: {
            values: valueFixture.createArrayWith(2)
        }
    });
});

afterEach(() => {
    container.remove();
    act(() => root.unmount());
    jest.clearAllMocks();
});

test("should render self Values", () => {
    root = createRoot(container);

    act(() => root.render(<Provider store={store}><Values /></Provider>));
    
    expect(document.body.querySelector("h2")).toHaveTextContent("Title");
});