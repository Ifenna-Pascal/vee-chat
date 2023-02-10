import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface modalState {
    show:boolean,
    type: string
}

const initialState:modalState =  {
    show: false,
    type: '',
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggle: (state, action:PayloadAction<string>) => {
            state.show = !state.show,
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

export const {toggle, closeModal, openModal} = modalSlice.actions;

export default modalSlice.reducer;