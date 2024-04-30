import Value from "../models/Value";

export default interface ValueState {
    values: Value[];
    currentId: number | null;
    currentValue: Value | null;
    displayModal: boolean;
}