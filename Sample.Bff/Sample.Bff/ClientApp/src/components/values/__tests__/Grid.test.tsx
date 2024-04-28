import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import Grid, { GridProps } from "../Grid";

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

test("should render self Grid", () => {
    root = createRoot(container);

    const grid: GridProps = {
        values: [],
        updateValue: () => {},
        deleteValue: () => {}
    };

    act(() => root.render(<Grid {...grid} />));
    
    expect(true).toBeTruthy();
});