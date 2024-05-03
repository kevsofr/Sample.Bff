import { valueFixture } from "../../fixtures/valueFixture";
import Value from "../../models/Value";
import { valueReducer } from "../valueReducer";

test("should handle FETCH_VALUES", () => {
    expect(
        valueReducer({
            values: [],
            currentId: null,
            currentValue: null,
            displayModal: false
        }, {
            type: "FETCH_VALUES"
        })
    ).toEqual({
        values: [],
        currentId: null,
        currentValue: null,
        displayModal: false
    });
});

test("should handle FETCH_VALUES_SUCCESS", () => {
    const values: Value[] = valueFixture.createArrayWith(2);

    expect(
        valueReducer({
            values: [],
            currentId: null,
            currentValue: null,
            displayModal: false
        }, {
            type: "FETCH_VALUES_SUCCESS",
            payload: values
        })
    ).toEqual({
        values: values,
        currentId: null,
        currentValue: null,
        displayModal: false
    });
});

test("should handle FETCH_VALUES_FAIL", () => {
    expect(
        valueReducer({
            values: [],
            currentId: null,
            currentValue: null,
            displayModal: false
        }, {
            type: "FETCH_VALUES_FAIL"
        })
    ).toEqual({
        values: [],
        currentId: null,
        currentValue: null,
        displayModal: false
    });
});

test("should handle FETCH_VALUE", () => {
    expect(
        valueReducer({
            values: [],
            currentId: null,
            currentValue: null,
            displayModal: false
        }, {
            type: "FETCH_VALUE",
            payload: 5
        })
    ).toEqual({
        values: [],
        currentId: 5,
        currentValue: null,
        displayModal: false
    });
});

test("should handle FETCH_VALUE_SUCCESS", () => {
    const value: Value = valueFixture.create();

    expect(
        valueReducer({
            values: [],
            currentId: 5,
            currentValue: null,
            displayModal: false
        }, {
            type: "FETCH_VALUE_SUCCESS",
            payload: value
        })
    ).toEqual({
        values: [],
        currentId: null,
        currentValue: value,
        displayModal: true
    });
});

test("should handle FETCH_VALUE_FAIL", () => {
    expect(
        valueReducer({
            values: [],
            currentId: 5,
            currentValue: null,
            displayModal: true
        }, {
            type: "FETCH_VALUE_FAIL"
        })
    ).toEqual({
        values: [],
        currentId: null,
        currentValue: null,
        displayModal: false
    });
});

test("should handle OPEN_MODAL", () => {
    expect(
        valueReducer({
            values: [],
            currentId: 4,
            currentValue: {
                id: 4,
                name: "Fake value 4"
            },
            displayModal: false
        }, {
            type: "OPEN_MODAL_VALUE",
            payload: 5
        })
    ).toEqual({
        values: [],
        currentId: null,
        currentValue: null,
        displayModal: true
    });
});

test("should handle CLOSE_MODAL", () => {
    expect(
        valueReducer({
            values: [],
            currentId: 5,
            currentValue: null,
            displayModal: true
        }, {
            type: "CLOSE_MODAL_VALUE"
        })
    ).toEqual({
        values: [],
        currentId: 5,
        currentValue: null,
        displayModal: false
    });
});

test("should handle CREATE_VALUE", () => {
    const value: Value = valueFixture.create();

    expect(
        valueReducer({
            values: [],
            currentId: null,
            currentValue: null,
            displayModal: true
        }, {
            type: "CREATE_VALUE",
            payload: value
        })
    ).toEqual({
        values: [],
        currentId: null,
        currentValue: value,
        displayModal: true
    });
});

test("should handle CREATE_VALUE_SUCCESS", () => {
    const value: Value = valueFixture.create();

    expect(
        valueReducer({
            values: [],
            currentId: null,
            currentValue: value,
            displayModal: true
        }, {
            type: "CREATE_VALUE_SUCCESS",
            payload: value
        })
    ).toEqual({
        values: [value],
        currentId: null,
        currentValue: null,
        displayModal: false
    });
});

test("should handle CREATE_VALUE_FAIL", () => {
    const value: Value = valueFixture.create();

    expect(
        valueReducer({
            values: [],
            currentId: null,
            currentValue: value,
            displayModal: true
        }, {
            type: "CREATE_VALUE_FAIL"
        })
    ).toEqual({
        values: [],
        currentId: null,
        currentValue: null,
        displayModal: false
    });
});

test("should handle UPDATE_VALUE", () => {
    const value: Value = valueFixture.create();
    const updatedValue = {
        id: value.id,
        name: "Fake value"
    };

    expect(
        valueReducer({
            values: [value],
            currentId: null,
            currentValue: null,
            displayModal: true
        }, {
            type: "UPDATE_VALUE",
            payload: updatedValue
        })
    ).toEqual({
        values: [value],
        currentId: null,
        currentValue: updatedValue,
        displayModal: true
    });
});

test("should handle UPDATE_VALUE_SUCCESS", () => {
    const value: Value = valueFixture.create();
    const updatedValue = {
        id: value.id,
        name: "Fake value"
    };

    expect(
        valueReducer({
            values: [value],
            currentId: null,
            currentValue: updatedValue,
            displayModal: true
        }, {
            type: "UPDATE_VALUE_SUCCESS",
            payload: updatedValue
        })
    ).toEqual({
        values: [updatedValue],
        currentId: null,
        currentValue: null,
        displayModal: false
    });
});

test("should handle UPDATE_VALUE_FAIL", () => {
    const value: Value = valueFixture.create();

    expect(
        valueReducer({
            values: [],
            currentId: null,
            currentValue: value,
            displayModal: true
        }, {
            type: "UPDATE_VALUE_FAIL"
        })
    ).toEqual({
        values: [],
        currentId: null,
        currentValue: null,
        displayModal: false
    });
});

test("should handle DELETE_VALUE", () => {
    const value: Value = valueFixture.create();

    expect(
        valueReducer({
            values: [value],
            currentId: null,
            currentValue: null,
            displayModal: false
        }, {
            type: "DELETE_VALUE",
            payload: value.id
        })
    ).toEqual({
        values: [value],
        currentId: value.id,
        currentValue: null,
        displayModal: false
    });
});

test("should handle DELETE_VALUE_SUCCESS", () => {
    const value: Value = valueFixture.create();

    expect(
        valueReducer({
            values: [value],
            currentId: value.id,
            currentValue: null,
            displayModal: false
        }, {
            type: "DELETE_VALUE_SUCCESS"
        })
    ).toEqual({
        values: [],
        currentId: null,
        currentValue: null,
        displayModal: false
    });
});

test("should handle DELETE_VALUE_FAIL", () => {
    const value: Value = valueFixture.create();

    expect(
        valueReducer({
            values: [value],
            currentId: value.id,
            currentValue: null,
            displayModal: false
        }, {
            type: "DELETE_VALUE_FAIL"
        })
    ).toEqual({
        values: [],
        currentId: null,
        currentValue: null,
        displayModal: false
    });
});