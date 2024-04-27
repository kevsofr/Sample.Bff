import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import Menu from "../Menu";

let container: any = null;
let root: any = null;
let store: any = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    container = null;
    root = null;
});

test("should render self Menu", () => {
    root = createRoot(container);

    act(() => root.render(<Menu />));
    
    expect(true).toBeTruthy();
});