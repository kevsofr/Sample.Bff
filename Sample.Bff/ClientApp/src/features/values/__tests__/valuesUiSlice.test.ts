import reducer, { openModal, closeModal } from "../valuesUiSlice";

test("should handle openModal", () => {
    const prev = { displayModal: false, valueId: 0 };

    const next = reducer(prev, openModal(1));

    expect(next.displayModal).toBeTruthy();
    expect(next.valueId).toBe(1);
});

test("should handle closeModal", () => {
    const prev = { displayModal: true, valueId: 1 };

    const next = reducer(prev, closeModal());

    expect(next.displayModal).toBeFalsy();
    expect(next.valueId).toBe(0);
});