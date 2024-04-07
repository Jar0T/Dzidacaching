import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: Cookies.get('theme') || 'light'
    },
    reducers: {
        toggleTheme: (state) => {
            state.value = state.value === 'light' ? 'dark' : 'light'
            Cookies.set('theme', state.value, { expires: 365 })
        }
    }
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer