import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface modalState {
    show:boolean,
    type: string,
    modalDisplay: boolean
}

const initialState:modalState =  {
    show: false,
    type: '',
    modalDisplay: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggle: (state, action:PayloadAction<string>) => {
            state.show = !state.show,
            state.type = action.payload
        },

        toggleDisplay:(state, action:PayloadAction<string>) => {
            state.modalDisplay = !state.modalDisplay,
            state.type = action.payload
        },

        closeModal: state => {
            state.show = false;
        },
        openModal: state => {
            state.show = true
        }
    }
});

export const modalMode = (state:RootState) => state.modal.show

export const {toggle, closeModal, openModal, toggleDisplay} = modalSlice.actions;

export default modalSlice.reducer;