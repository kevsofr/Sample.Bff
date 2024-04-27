import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import ValueModal from "../ValueModal";

let container: any = null;
let root: any = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    container = null;
    root = null;
});

test("should render self ValueModal", () => {
    root = createRoot(container);

    act(() => root.render(<ValueModal />));
    
    expect(true).toBeTruthy();
});