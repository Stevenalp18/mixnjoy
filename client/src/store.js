import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './features/singleIngredientModalSlice'

export default configureStore({
    reducer: {
        modal: modalReducer,
    }
})
