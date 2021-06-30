import { configureStore } from '@reduxjs/toolkit'
import counter from './change'

export default configureStore({
    reducer:
        {
    counter
    },})
