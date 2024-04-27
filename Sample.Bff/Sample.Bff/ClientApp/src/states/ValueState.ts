import Value from "../models/Value";

export default interface ValueState {
    values: Value[];
    currentId: number;
    currentValue: Value;
    displayModal: boolean;
}