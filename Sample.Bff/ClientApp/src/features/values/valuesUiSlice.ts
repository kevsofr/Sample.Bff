import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface UsersUiState {
    displayModal: boolean,
    valueId: number
}

const initialState: UsersUiState = {
    displayModal: false,
    valueId: 0
};

const valuesSlice = createSlice({
    name: "valuesUi",
    initialState,
    reducers : {
        openModal(state, action: PayloadAction<number>) {
            state.displayModal = true;
            state.valueId = action.payload;
        },
        closeModal(state) {
            state.displayModal = false;
            state.valueId = 0;
        }
    } 
});

export const {
    openModal,
    closeModal
} = valuesSlice.actions;
export const selectValuesUi = (s: RootState) => s.valuesUi;

export default valuesSlice.reducer;