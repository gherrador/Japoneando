import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userLogin, logOutUser, getLogedUser } from '../../api'



const initialState = {
    loading: false,
    User: {},
    error: ''
}

export const logUser = createAsyncThunk('LOGIN_USER', async (data) => {
    return await userLogin(data)
})

export const logOut = createAsyncThunk('LOGOUT_USER', async () => {
    return await logOutUser()
})

export const getUserLogin = createAsyncThunk('GET_USER', async () => {
    return await getLogedUser()
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {

        // ------ Login User --------//
        builder.addCase(logUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(logUser.fulfilled, (state, action) => {
            state.loading = false
            state.User = action.payload
            state.error = ''
        })
        builder.addCase(logUser.rejected, (state, action) => {
            state.loading = false
            state.User = {}
            state.error = action.error.message
        })

        // ------ Get User (If exist) --------//
        builder.addCase(getUserLogin.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getUserLogin.fulfilled, (state, action) => {
            state.loading = false
            state.User = action.payload
            state.error = ''
        })
        builder.addCase(getUserLogin.rejected, (state, action) => {
            state.loading = false
            state.User = {}
            state.error = action.error.message
        })
        // ------ LogOut User --------//

        builder.addCase(logOut.pending, (state) => {
            state.loading = true
        })
        builder.addCase(logOut.fulfilled, (state, action) => {
            state.loading = false
            state.User = action.payload
            state.error = ''
        })
        builder.addCase(logOut.rejected, (state, action) => {
            state.loading = false
            state.User = [...state.User]
            state.error = action.error.message
        })
    }
})
export const userReducer = userSlice.reducer
