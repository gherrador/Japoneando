import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { listProducts, listById } from '../../api';


const initialState = {
    loading: false,
    products: [],
    productById: [],
    error: ''
}

export const getProducts = createAsyncThunk('GET_PRODUCTS_LIST', async (id) => {
    return await listProducts(id)
})

export const getProductsById = createAsyncThunk('GET_PRODUCTS_BY_ID', async (id) => {
    return await listById(id)
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            state.error = ''
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false
            state.products = []
            state.error = action.error.message
        })

        /*--------  Get Product By Id    ----------*/
        builder.addCase(getProductsById.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getProductsById.fulfilled, (state, action) => {
            state.loading = false
            state.productById = [action.payload]
            state.error = ''
        })
        builder.addCase(getProductsById.rejected, (state, action) => {
            state.loading = false
            state.productById = []
            state.error = action.error.message
        })
    }
})
export const productReducer = productSlice.reducer
