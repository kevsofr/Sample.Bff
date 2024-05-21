import Value from "../models/Value";

export default interface ValueState {
    values: Value[];
    loading: boolean;
    error: boolean;
    currentId: number | null;
    currentValue: Value | null;
    displayModal: boolean;
}