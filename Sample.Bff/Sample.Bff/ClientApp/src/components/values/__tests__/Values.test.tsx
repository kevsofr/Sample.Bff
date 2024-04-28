import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Values from "../Values";
import { valueFixture } from "../../../fixtures/valueFixture";

let container: any = null;
let root: any = null;
let store: any = null;

jest.mock("../Title");
jest.mock("../Grid");
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
    container = null;
    root = null;
    store = null;
    jest.clearAllMocks();
});

test("should render self Values", () => {
    root = createRoot(container);

    act(() => root.render(<Provider store={store}><Values /></Provider>));
    
    expect(document.body.querySelector("h2")?.textContent).toBe("Title");
});