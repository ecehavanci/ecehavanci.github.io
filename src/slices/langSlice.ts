import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageType } from '../types';

interface LanguageState {
    selectedLanguage: LanguageType;
}

const initialState: LanguageState = {
    selectedLanguage: 'en',
};


const languageSlice = createSlice({
    name: 'data',
    initialState: initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<LanguageType>) {
            state.selectedLanguage = action.payload;
        },
    }
});

export default languageSlice.reducer;
export const { setLanguage } = languageSlice.actions;
