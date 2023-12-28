import { createSlice } from '@reduxjs/toolkit';

export const singleIngredientModalSlice = createSlice({
    name: 'modal',
    initialState: {
        value: false,
    },

    reducers: {
        setSingleIngredCardActive: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setSingleIngredCardActive } = singleIngredientModalSlice.actions;

export default singleIngredientModalSlice.reducer;