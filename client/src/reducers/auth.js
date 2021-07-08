import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: user,
    initialState: {
        isAuthenticated: true,
        isLoading: false,
        user: {},
    },
    reducers: {
        setLoading: (state) => {
            state.isAuthenticated = false,
                state.isLoading = true,
                user = {}
        },
        setUser: (state, action) => {
            state.isAuthenticated = true,
                state.isLoading = false,
                state.user = action.payload
        },
    },
});

export const { setLoading, setUser } = authSlice.actions

export default authSlice.reducer